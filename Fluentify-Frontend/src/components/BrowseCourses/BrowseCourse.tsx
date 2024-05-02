import React, { FC, useEffect, useState } from 'react';
import Search from '../../assets/search.png';
import CourseCard from '../CourseCard/CourseCard';
import axios from 'axios';

interface BrowseCourseProps { }

const BrowseCourse: FC<BrowseCourseProps> = ({ }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/courses', {
        withCredentials: true,

      })
      .then((response) => {
        // Handle the response data here
        console.log(response.data.courses);
        setCourses(response.data.courses);
      })
      .catch((error) => {
        // Handle the error here
        console.error(error);
      });
  }, []);

  return (
    <div className="h-full w-full p-10">
      <div
        className="h-[100%] w-full px-[40px] flex flex-col overflow-scroll pt-8"
        style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
      >
        <div className="w-full h-[100px] flex justify-center items-center">
          <div className="w-[65%] flex">
            <input
              type="text"
              placeholder="Search for a course"
              className="text-[14px] placeholder:text-[#434343]   bg-[#f5f5f5] w-[calc(100%-40px)] pl-4 h-[40px] border-2 border-[#7272F1] border-r-0 rounded-[100px] rounded-r-none p-2"
            />
            <div className="w-[40px] h-[40px] border-[#7272F1] bg-[#f5f5f5] rounded-[100px] rounded-l-none border-2 flex justify-center items-center cursor-pointer innerScale">
              <img src={Search} alt="search" className="w-[15px] h-[15px]" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap gap-4 gap-y-8 p-12">
          {courses.map((course) => {
            return <CourseCard course={course} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BrowseCourse;