import React, { FC, useRef, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { ActionIcon, rem } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { IconClock } from '@tabler/icons-react';
import toast from 'react-hot-toast';

interface CalenderProps {}

function checkNonIntersectingTime(
  newTimeSlot: [string, string],
  existingTimeSlots: [string, string][]
): boolean {
  const [newStartTime, newEndTime] = newTimeSlot;

  // Convert time strings to minutes for easier comparison
  const convertToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const newStartMinutes = convertToMinutes(newStartTime);
  const newEndMinutes = convertToMinutes(newEndTime);

  // Check intersection with each existing time slot
  for (const [existingStartTime, existingEndTime] of existingTimeSlots) {
    const existingStartMinutes = convertToMinutes(existingStartTime);
    const existingEndMinutes = convertToMinutes(existingEndTime);

    // If the new time slot's start time is after or equal to existing end time
    // OR new time slot's end time is before or equal to existing start time,
    // then they do not intersect
    if (
      newStartMinutes >= existingEndMinutes ||
      newEndMinutes <= existingStartMinutes
    ) {
      continue; // No intersection, check next existing time slot
    } else {
      return false; // Intersection found
    }
  }

  return true; // No intersection found with any existing time slot
}

function checkValidTime(newTimeSlot: [string, string]): boolean {
  const [startTime, endTime] = newTimeSlot;

  // Convert time strings to minutes for easier comparison
  const convertToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const startMinutes = convertToMinutes(startTime);
  const endMinutes = convertToMinutes(endTime);

  // Check if start time is less than end time
  return startMinutes < endMinutes;
}

const Calender: FC<CalenderProps> = ({
  calenderSchedule,
  setCalenderSchedule,
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const ref = useRef<HTMLInputElement>(null);

  // const [calenderSchedule, setCalenderSchedule] = useState<{
  //   Monday: [string][];
  //   Tuesday: [string][];
  //   Wednesday: [string][];
  //   Thursday: [string][];
  //   Friday: [string][];
  //   Saturday: [string][];
  //   Sunday: [string][];
  // }>({
  //   Monday: [],
  //   Tuesday: [],
  //   Wednesday: [],
  //   Thursday: [],
  //   Friday: [],
  //   Saturday: [],
  //   Sunday: [],
  // });

  const [slotStart, setSlotStart] = useState('');
  const [slotEnd, setSlotEnd] = useState('');
  const [slotDays, setSlotDays] = useState<string[]>([]);

  const handleSlotCreation = () => {
    console.log(slotStart, slotEnd, slotDays);
    if (slotStart === '' || slotEnd === '' || slotDays.length === 0) {
      return;
    }
    let tempSchedule: any = { ...calenderSchedule };
    let flag = false;
    slotDays.forEach((day) => {
      if (!checkValidTime([slotStart, slotEnd])) {
        toast.dismiss();
        toast.error('Please enter a valid time slot');
        flag = true;
        return;
      }
      if (checkNonIntersectingTime([slotStart, slotEnd], tempSchedule[day])) {
        tempSchedule[day] = [...tempSchedule[day], [slotStart, slotEnd]];
      } else {
        toast.dismiss();
        toast.error(
          'There is some other class already in this timing. Please choose another timing.'
        );
        flag = true;
        return;
      }
    });
    if (flag) return;
    Object.keys(tempSchedule).forEach((day) => {
      tempSchedule[day].sort((a, b) => a[0].localeCompare(b[0]));
    });
    setCalenderSchedule(tempSchedule);
    setSlotStart('');
    setSlotEnd('');
    setSlotDays([]);
    close();
  };

  const pickerControl = (
    <ActionIcon
      variant="subtle"
      color="gray"
      onClick={() => ref.current?.showPicker()}
    >
      <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
    </ActionIcon>
  );

  return (
    <div className=" rounded-[10px] p-2 w-[800px] overflow-hidden">
      <Modal
        opened={opened}
        onClose={close}
        title="Add a Slot"
        centered
        size="sm"
      >
        <div className="pt-0 flex flex-col gap-4">
          <div className=" pb-6">
            <div className="text-[16px] font-medium mb-2">
              Choose Slot Timings :
            </div>
            <div className="w-[100%] flex justify-center gap-2 items-center mt-2">
              <TimeInput
                ref={ref}
                className="w-[40%]"
                value={slotStart}
                onChange={(e) => {
                  setSlotStart(e.target.value);
                }}
              />
              <span>-</span>
              <TimeInput
                ref={ref}
                className="w-[40%]"
                value={slotEnd}
                onChange={(e) => {
                  setSlotEnd(e.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <div className="text-[16px] font-medium mb-2">Slot Days</div>
            <div className="flex flex-wrap gap-2">
              {Object.keys(calenderSchedule).map((day, index) => {
                return (
                  <span
                    key={index}
                    className={`w-[60px] text-center   p-2  rounded-md hoverDay ${
                      slotDays.includes(day) ? 'activeDay' : ''
                    }`}
                    onClick={() => {
                      if (slotDays.includes(day)) {
                        setSlotDays(
                          slotDays.filter((slotDay) => slotDay !== day)
                        );
                      } else {
                        setSlotDays([...slotDays, day]);
                      }
                    }}
                  >
                    {day.slice(0, 3)}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="w-full flex justify-end items-center">
            <button
              className="text-[16px] h-[40px] flex justify-center items-center text-white p-3 bg-customBlue hover:bg-customBlue active:bg-customBlue transition-all rounded-sm"
              onClick={handleSlotCreation}
            >
              Confirm
            </button>
          </div>
        </div>
      </Modal>
      <div className=" rounded-[10px]  flex flex-col h-full">
        <div className="w-full rounded-[5px] h-[60px] -2 pl-3 pr-3 flex items-center justify-between font-semibold text-customBlue text-[22px] overflow-hidden ">
          <div>Course Schedule</div>
          <div>
            <button
              onClick={open}
              className="text-[16px] h-[40px] flex justify-center items-center rounded-md text-white p-3 bg-black hover:bg-[#4b4b4b] active:bg-[#5a5a5a] transition-all"
            >
              Create a Slot
            </button>
          </div>
        </div>
        <div className="w-full h-full flex overflow-hidden">
          <div className="w-[25%] h-full border-r-2 overflow-hidden ">
            {Object.keys(calenderSchedule).map((day, index) => {
              return (
                <div
                  key={index}
                  className="h-[36px] text-[17px]  flex justify-center items-center"
                >
                  {day}
                </div>
              );
            })}
          </div>
          <div className="w-[75%] overflow-hidden">
            {Object.keys(calenderSchedule).map((day, index) => {
              const dayKey = day as keyof typeof calenderSchedule;
              return (
                <div
                  key={index}
                  className={`h-[36px] text-[16px]  flex gap-2 pl-2 pr-2 overflow-x-scroll items-center`}
                >
                  {calenderSchedule[dayKey].length > 0 ? (
                    calenderSchedule[dayKey].map((slot: (string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined)[], index: React.Key | null | undefined) => {
                      return (
                        <div className="rounded bg-customBlue min-w-[120px] text-white p-1 text-[14px] text-center">
                          <span
                            key={index}
                            className="text-[12px] font-semibold"
                          >
                            {slot[0]} - {slot[1]}
                          </span>
                        </div>
                      );
                    })
                  ) : (
                    <span className="text-[#3b3b3b8a]">No Slots Booked</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
