import React, { FC, useContext,useEffect } from 'react';
import { Card, Image, Text, Badge } from '@mantine/core';
import { UserContext } from '../../Context/UserContextProvider';
import { useNavigate } from 'react-router-dom';

interface CourseCardProps {
  name:string;
  language: string;
  level: string;
  slotsTaken: any;
  courseSlots :any;
}

const TutorCard: FC<CourseCardProps> = ({
  name,
  language,
  level,
  slotsTaken,
  courseSlots
}) => {

  useEffect(()=>{
    console.log("slots taken", courseSlots)
  },[slotsTaken])

  const navigate = useNavigate()

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      className="w-[400px] h-fit cursor-pointer transition-all"
      withBorder
    >
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={80}
          alt="Norway"
        />
      </Card.Section>
      <div className="flex flex-col mt-4 mb-4">
        <div className="mb-2">
          <p className="font-semibold text-xl">{name}</p>
        </div>
        <div className="flex gap-2">
          <Badge color="pink">{language}</Badge>
          <Badge color="blue">{level}</Badge>
        </div>
      </div>{' '}
      <div className="flex flex-col mt-4 mb-4">
        <div className="mb-2">
          <Text fw={500}>Day Slots</Text>
        </div>
        <div className="flex gap-2">
          {Object.entries(slotsTaken)
          .filter((slot) => slot[1].length > 0)
          .map((slot) => {
            return <Badge color="grey">{slot[0]}</Badge>;
          }
          )}
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
      <div className="flex flex-col mt-4 mb-4">
        <div className="mb-2">
          <Text fw={500}>Time Slots</Text>
        </div>
        <div className="flex gap-2 flex-wrap">
          {
            Object.entries(slotsTaken).map((slot) => {
              return slot[1].map((time) => {

                return <Badge color="teal">{(courseSlots[slot[0]][slot[1]]).join(" - ")}</Badge>;
              });
            })
          }
        </div>
      </div>
      <button
        className="mt-[25px] text-[16px] h-[40px] flex justify-center items-center text-white p-3 bg-[#318CE7] hover:bg-[#43a0fc] active:bg-[#3176bb] transition-all rounded-md "
        onClick={()=>{
          navigate("/mycourses/desc/65ed06b41b805aba53b7465b")
        }}
      >
        Join Class
      </button>
    </Card>
  );
};

export default TutorCard;
