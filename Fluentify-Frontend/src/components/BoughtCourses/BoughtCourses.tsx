import { useEffect, useState } from 'react';
import TutorCard from '../TutorCard/TutorCard';
import axios from 'axios';

const BoughtCourses = () => {
  const [myCourses, setMyCourses] = useState({});

  useEffect(()=>{
    const fetchMyCourses = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/student/myCourses', {
          withCredentials: true,
        });
        console.log(response.data.courses.enrolledCoursesArray)
        setMyCourses(response.data.courses)
      } catch (error) {
        console.error('Error fetching my courses:', error);
      }
    }
    fetchMyCourses()
  }, [])

  if(!myCourses.enrolledCoursesArray) return <div className="h-full w-full p-10 flex flex-col gap-5">
  <div className=" w-full h-[100px] flex flex-row items-center text-3xl justify-between font-semibold">
    <p>My courses</p>
  </div>
  <div className="h-[calc(100%-100px)] w-full flex flex-wrap overflow-y-scroll gap-10">
    You have not enrolled in any courses yet... Come again later.
  </div>
</div>

  return (
    <div className="h-full w-full p-10 flex flex-col gap-5">
      <div className=" w-full h-[100px] flex flex-row items-center text-3xl justify-between font-semibold">
        <p>My courses</p>
      </div>
      <div className="h-[calc(100%-100px)] w-full flex flex-wrap overflow-y-scroll gap-10">
        {
          myCourses.enrolledCoursesArray.map((ele, i)=>(
            <TutorCard key={i} name={ele.courseID.name} level={ele.courseID.difficulty} language={ele.courseID.language} slotsTaken={ele.courseBookedSlot} courseSlots={ele.courseID.slots
            } />
          ))
        }
      </div>
    </div>
  );
};
export default BoughtCourses;
