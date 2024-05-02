import React, { FC, useContext } from 'react';
import { Card, Image, Text, Badge } from '@mantine/core';
import { UserContext } from '../../Context/UserContextProvider';

interface CourseCardProps {}

const TutorCard2: FC<CourseCardProps> = ({ course }) => {
  console.log(course, 'course');
  const { user } = useContext(UserContext);
  const storedUser = localStorage.getItem('user');
  const parsedUser = storedUser ? JSON.parse(storedUser) : null;
  const currentUser = parsedUser || user;
  console.log(currentUser);
  const daysWithSlots = [];
  Object.keys(course.slots).forEach((day) => {
    if (course.slots[day].length > 0) {
      daysWithSlots.push(day);
    }
  });
  console.log(daysWithSlots);
  const allSlots = [];
  Object.values(course.slots).forEach((daySlots) => {
    if (!allSlots.includes(daySlots)) allSlots.push(...daySlots);
  });
  const uniqueSlots = [...new Set(allSlots)];
  console.log(uniqueSlots);
  // course.slots.map((slot) => {
  //   console.log(slot);
  // });
  // const daysWithSlots = [];
  // course.slots.forEach((slot) => {
  //   console.log(slot, 'helo');
  //   if (slot.day.length > 0) {
  //     daysWithSlots.push(slot.day);
  //   }
  // });
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      className="w-[400px] h-fit cursor-pointer transition-all"
      withBorder
    >
      <div className="h-[500px] flex flex-col justify-between">
        <Card.Section>
          <Image
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
            height={80}
            alt="Norway"
          />
        </Card.Section>
        <div className="flex flex-col mt-2 mb-2">
          <div className="mb-2 w-full flex flex-row justify-between">
            <p className="font-semibold text-xl">{course.name}</p>
            <p className="font-semibold text-lg text-[#707070]">
              {course.creatorID.username}
            </p>
          </div>
          <div className="flex gap-2">
            <Badge color="pink">{course.language}</Badge>
            <Badge color="blue">{course.difficulty}</Badge>
          </div>
        </div>{' '}
        <div className="flex flex-col mt-2 mb-2">
          <div className="mb-2">
            <Text fw={500}>Day Slots</Text>
          </div>
          <div className="flex gap-2">
            {daysWithSlots.map((day) => {
              return <Badge color="gray">{day}</Badge>;
            })}
          </div>
        </div>
        <div className="flex flex-col mt-2 mb-2">
          <div className="mb-2">
            <Text fw={500}>Time Slots</Text>
          </div>
          <div className="flex gap-2">
            {uniqueSlots.map((day) => {
              return <Badge color="teal">{`${day[0]} - ${day[1]}`}</Badge>;
            })}
          </div>
        </div>
        <button
          className="mt-[25px] text-[16px] h-[40px] flex justify-center items-center text-white p-3 bg-[#318CE7] hover:bg-[#43a0fc] active:bg-[#3176bb] transition-all rounded-md "
          onClick={(e) => {
            console.log(e, 'clicked');
            window.location.href = `/mycourses/${course._id}`;
          }}
        >
          Manage
        </button>
      </div>
    </Card>
  );
};

export default TutorCard2;