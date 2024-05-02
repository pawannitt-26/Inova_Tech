import { useNavigate } from 'react-router-dom';
import TutorCard from '../TutorCard/TutorCard';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/UserContextProvider';
import axios from 'axios';
import TutorCard2 from '../TutorCard2/TutorCard2';
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const storedUser = localStorage.getItem('user');
  const parsedUser = storedUser ? JSON.parse(storedUser) : null;
  const currentUser = parsedUser || user;
  // console.log(currentUser);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/courses/all/${currentUser.user._id}`, {
        withCredentials: true,
      })
      .then((response) => {
        // Handle the response data here
        console.log(response.data);
        setCourses(response.data.courses);
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  }, []);
  console.log(user);
  return (
    <div className="h-full w-full p-10 flex flex-col gap-5">
      <div className=" w-full h-[100px] flex flex-row items-center text-3xl justify-between font-semibold">
        <p>My courses</p>
        <div
          onClick={() => {
            navigate('/createcourse');
          }}
          className="h-[50px] w-[180px] cursor-pointer rounded-md bg-customBlue text-lg flex justify-center items-center font-semibold text-white"
        >
          Create a course
        </div>
      </div>
      <div className="h-[calc(100%-100px)] w-full flex flex-wrap overflow-y-scroll gap-10">
        {courses.map((course) => {
          return <TutorCard2 course={course} />;
        })}
        {/* <TutorCard />
        <TutorCard />
        <TutorCard />
        <TutorCard />
        <TutorCard />
        <TutorCard />
        <TutorCard /> */}
      </div>
    </div>
  );
};
export default Courses;
