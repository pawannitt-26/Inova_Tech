import React, { useContext, useEffect } from 'react';

import LandingImage from './../../../public/landing.png';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContextProvider';
const Landing = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/myschedule');
      return;
    }
  }, [user]);
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col overflow-hidden">
      <div
        className="h-[80px] min-h-[80px] w-[100%] bg-[#ffffff] shadow-xl px-10 flex justify-between items-center z-10"
        style={{ boxShadow: '0px 8px 50px rgba(0, 0, 0, 0.05)' }}
      >
        <h1 className="font-extrabold text-2xl text-[#7272f1]">
          LINGUACONNECT
        </h1>
      </div>
      <div className="h-full w-full flex flex-row p-12">
        {' '}
        <div className="h-full w-1/2 flex items-center">
          <img className="h-[90%] min-w-[900px]" src={LandingImage} alt="" />
        </div>
        <div className="h-full w-1/2 flex flex-col items-end font-extrabold text-[5rem] gap-[60px]">
          <div>
            {' '}
            <h1 className="text-right">WELCOME TO</h1>
            <p className="text-[3rem] text-right px-1">LINGUACONNECT</p>
          </div>

          {/* <p className="font-medium text-lg text-[#616161] text-right w-[500px]">
            Discover the joy of learning a new language with our immersive
            platform. From interactive lessons to expert tutors, we've got
            everything you need to confidently speak, listen, and connect. Join
            us and explore a world of possibilities through language at
            <span className="font-bold text-black"> Linguaconnect</span>
          </p> */}
          <div className="flex flex-col gap-4 items-end w-[30%] mt-12">
            {' '}
            <div
              className="cursor-pointer text-xl font-semibold bg-customBlue text-white rounded h-[60px] justify-center items-center flex w-[200px]"
              onClick={() => {
                window.location.href = '/getstarted';
              }}
            >
              Get Started
            </div>
            <p className=" text-lg font-medium">or</p>
            <div className="cursor-pointer text-lg font-semibold bg-black text-white rounded h-[60px] justify-center items-center flex w-[300px]">
              Already Have an Account ?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
