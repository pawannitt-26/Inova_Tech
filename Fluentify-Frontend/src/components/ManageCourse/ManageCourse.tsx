import Calender from '../Calender/Calender';
import Edit from './../../../public/edit.png';
import Done from './../../../public/done.png';
import { UserContext } from '../../Context/UserContextProvider';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { URLSearchParams } from 'url';
import { useNavigate, useParams } from 'react-router-dom';

const Courses = () => {
  const [calenderSchedule, setCalenderSchedule] = useState<{
    Monday: [string][];
    Tuesday: [string][];
    Wednesday: [string][];
    Thursday: [string][];
    Friday: [string][];
    Saturday: [string][];
    Sunday: [string][];
  }>({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });
  const { id } = useParams();
  console.log(id);
  const [course, setCourse] = useState([]);
  const [description, setDescription] = useState('');
  const navigate = useNavigate()
  // const { user } = useContext(UserContext);
  // const storedUser = localStorage.getItem('user');
  // const parsedUser = storedUser ? JSON.parse(storedUser) : null;
  // const currentUser = parsedUser || user;
  // console.log(currentUser);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/courses/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        // Handle the response data here
        console.log(response.data);
        setCourse(response.data.course);
        setDescription(response.data.course.description);
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  }, []);
  // console.log(user);
  const DefaultDesc = (props) => {
    if (mode == 'Edit') {
      return (
        <>
          {' '}
          <div className="w-full flex justify-between">
            {' '}
            <p className="text-[#686868] text-lg">Description: </p>
            <div className="h-[30px] w-[30px]" onClick={() => setMode('Idle')}>
              <img src={Done} alt="" />
            </div>
          </div>
          <textarea
            className="text-[#aaaaaa] font-medium text-lg h-[200px]"
            defaultValue={description}
            onChange={(e) => {
              props.setDescription(e.target.value);
            }}
          />
        </>
      );
    } else {
      return (
        <>
          <div className="w-full flex justify-between">
            {' '}
            <p className="text-[#686868] text-lg">Description: </p>
            <div className="h-[30px] w-[30px]" onClick={() => setMode('Edit')}>
              <img src={Edit} alt="" />
            </div>
          </div>
          <p className="text-[#aaaaaa] font-medium text-lg h-[200px] overflow-y-scroll">
            {description}
          </p>
        </>
      );
    }
  };
  const [mode, setMode] = useState('idle');
  const Slots = () => {
    return (
      <div className="w-full">
        <div className="w-full h-[80px] flex flex-row justify-between items-center gap-10 pr-5">
          <div className="w-[300px] h-[70%] bg-[#7272f1] rounded-[10px] flex items-center justify-center font-semibold  text-xl text-[white]">
            7:00AM - 8:00AM
          </div>

          <div className="w-[300px] flex flex-row gap-4">
            Student:{' '}
            <div className="flex flex-row gap-1">
              <span>
                <div className="h-[20px] w-[20px] rounded-[50%] flex flex-row bg-[#7272f1]"></div>
              </span>{' '}
              <p>Megaa</p>
            </div>
          </div>
          <div className="h-[50px] w-[200px] rounded-[5px] flex flex-row justify-center items-center text-white font-semibold cursor-pointer bg-[#000000]">
            Go live
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="h-full w-full p-10 flex flex-col gap-5 ">
      <div className="w-full h-[60%] flex flex-row justify-between ">
        <div
          className=" w-[48%] h-full flex flex-col text-3xl gap-5 font-semibold p-6"
          style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
        >
          <p>{course.name}</p>
          <div onClick={()=>{
            navigate(`/mycourses/desc/65ed06b41b805aba53b7465b`)
          }} className="w-[200px] h-[50px] rounded-md cursor-pointer bg-customBlue font-semibold flex justify-center items-center text-white text-lg">
            Start Live Session
          </div>

          <DefaultDesc setDescription={setDescription} />
        </div>
        <div
          className="w-[50%] flex flex-row justify-center rounded-lg  overflow-y-scroll"
          style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
        >
          <Calender
            calenderSchedule={calenderSchedule}
            setCalenderSchedule={setCalenderSchedule}
          />
        </div>
      </div>
      <div
        className="h-[50%] w-full px-10 py-5 overflow-hidden"
        style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
      >
        <div className="h-full w-full overflow-y-scroll">
          {' '}
          <Slots />
          <Slots />
          <Slots />
          <Slots />
          <Slots />
          <Slots />
          <Slots />
        </div>
      </div>
    </div>
  );
};
export default Courses;
