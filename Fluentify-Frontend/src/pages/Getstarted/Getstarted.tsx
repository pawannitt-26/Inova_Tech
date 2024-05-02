import Tutor from './../../../public/tutor.png';
import Student from './../../../public/student.png';
const Getstarted = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col gap-10 justify-center items-center overflow-hidden">
      <p className="text-[3rem] font-bold">GET STARTED</p>
      <div className="w-[700px] h-[500px] flex flex-row  justify-between transition-all">
        <div
          className="gap-5 p-8 w-[300px] h-[350px] border-[3px] border-[#e0e0e0] transition-all hover:bg-[#e0e0e0] cursor-pointer items-center flex flex-col"
          onClick={() => {
            window.location.href = '/tutorregister';
          }}
        >
          <div className="h-[50%] w-full flex justify-center">
            <img className="h-[100%]" src={Tutor} alt="" />
          </div>
          <p className="w-full flex justify-center font-semibold text-lg">
            JOIN AS TUTOR
          </p>
          <p className="text-center">
            Create Live classes and teach students around the world
          </p>
        </div>
        <div
          className="gap-5 px-4 py-8 w-[300px] h-[350px] border-[3px] border-[#e0e0e0] transition-all hover:bg-[#e0e0e0] cursor-pointer items-center flex flex-col"
          onClick={() => {
            window.location.href = '/learnerregister';
          }}
        >
          <div className="h-[50%] w-full flex justify-center">
            <img className="h-[100%]" src={Student} alt="" />
          </div>
          <p className="w-full flex justify-center font-semibold text-lg">
            JOIN AS LEARNER
          </p>
          <p className="text-center">
            Learn your favourite languages from the experienced tutors worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default Getstarted;
