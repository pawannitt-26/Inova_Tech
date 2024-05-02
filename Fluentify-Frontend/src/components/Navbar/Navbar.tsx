import { useContext, useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContextProvider';
import Wallet from '../../pages/Wallet/Wallet';

export const Navbar = () => {
  const [showWallet, setShowWallet] = useState(false);
  const toggleWallet = () => {
    setShowWallet(!showWallet);
  };

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  // useEffect(() => {
  //   console.log(user);
  //   if (!localStorage.getItem('user')) {
  //     navigate('/landing');
  //     return;
  //   }
  // }, [user]);

  const UserAvatar = () => {
    if (user?.user?.username == undefined) return <></>;
    const firstLetter = user.user.username.charAt(0).toUpperCase();
    // const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return (
      <Link to="/myprofile">
        <div className="h-[40px] w-[40px] rounded-[50%] flex flex-row justify-center items-center bg-customBlue">
          <p className="text-white font-semibold">{firstLetter}</p>
        </div>
      </Link>
    );
  };

  const currentUrl = window.location.href.toString();
  const urlParts = currentUrl.split('/');
  const extractedString = urlParts[3];
  const [current, setCurrent] = useState('');
  console.log(extractedString);
  useEffect(() => {
    if (extractedString.startsWith('myschedule')) {
      setCurrent('My Schedule');
    }
    if (extractedString.startsWith('mycourses')) {
      setCurrent('Manage Courses');
    }
    if (extractedString.startsWith('myschedule')) {
      setCurrent('My Schedule');
    }
    if (extractedString.startsWith('browse')) {
      setCurrent('Browse Courses');
    }
  }, [extractedString]);

  if (user?.user?.role == 'STUDENT') {
    return (
      <div className="h-[100vh] w-[100vw] overflow-hidden flex flex-col">
        <div
          className="h-[100px] min-h-[100px] w-[100%] bg-[#ffffff] shadow-xl px-10 flex justify-between items-center z-10"
          style={{ boxShadow: '0px 8px 50px rgba(0, 0, 0, 0.05)' }}
        >
          <h1 className="font-extrabold text-4xl text-[#7272f1]">
            Fluentify
          </h1>
          <div className="flex flex-row items-center gap-[20%]">
            <img
              className="cursor-pointer"
              onClick={toggleWallet}
              style={{ width: '35px', height: '35px' }}
              src="./src/assets/wallet.svg"
              alt="Wallet"
            />
            <UserAvatar />
          </div>
        </div>
        {showWallet && (
          <div
            style={{
              position: 'absolute',
              top: '10%',
              left: '80%',
              backgroundColor: '#ffffff',
              padding: '10px',
              borderRadius: '5px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              zIndex: 100,
            }}
          >
            <Wallet balance={500} />
          </div>
        )}
        <div className="h-[calc(100%-100px)] w-full flex flex-row">
          <div className="h-[100%] w-[15%] min-w-[250px] bg-[#ffffff] px-10 pt-[40px] pb-[80px] text-left">
            <h1 className="font-bold text-2xl mb-5">Dashboard</h1>
            <div className="h-full w-full flex flex-col justify-between text-left">
              <div className="w-full h-fit flex flex-col gap-3">
                <div
                  className={`h-[40px] w-full flex items-center cursor-pointer font-medium ${
                    current == 'My Courses'
                      ? 'text-[#7272f1]'
                      : 'text-[#838383]'
                  }`}
                  onClick={(e) => {
                    window.location.href = '/boughtCourses';
                    const target = e.target as HTMLElement;
                    console.log(target.innerHTML);
                    setCurrent(`${target.innerHTML}`);
                  }}
                >
                  My Courses
                </div>
                <div
                  className={`h-[40px] w-full flex items-center cursor-pointer  font-medium ${
                    current == 'Browse Courses'
                      ? 'text-[#7272f1]'
                      : 'text-[#838383]'
                  }`}
                  onClick={(e) => {
                    window.location.href = '/courses';
                    const target = e.target as HTMLElement;
                    setCurrent(`${target.innerHTML}`);
                  }}
                >
                  Browse Courses
                </div>
                <div
                  className={`h-[40px] w-full flex items-center cursor-pointer font-medium ${
                    current == 'Resources Hub'
                      ? 'text-[#7272f1]'
                      : 'text-[#838383]'
                  }`}
                  onClick={(e) => {
                    window.location.href = '/myresources';
                    const target = e.target as HTMLElement;
                    setCurrent(`${target.innerHTML}`);
                  }}
                >
                  Resources Hub
                </div>
              </div>
              <div className="w-full h-fit  flex flex-col gap-5">
                <div className="h-[40px] w-full flex items-center cursor-pointer   text-[#838383] font-medium">
                  Help and Support
                </div>{' '}
                <div
                  className="h-[40px] w-full flex items-center cursor-pointer   text-[#838383] font-medium"
                  onClick={() => {
                    localStorage.removeItem('user');
                    navigate('/landing');
                  }}
                >
                  Logout
                </div>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-[100vh] w-[100vw] overflow-hidden flex flex-col">
        <div
          className="h-[100px] w-[100%] bg-[#ffffff] shadow-xl px-10 flex justify-between items-center z-10 min-h-[100px]"
          style={{ boxShadow: '0px 8px 50px rgba(0, 0, 0, 0.05)' }}
        >
          <h1 className="font-extrabold text-4xl text-[#7272f1]">
            Fluentify
          </h1>

          <UserAvatar />
        </div>

        <div className="h-full max-h-full overflow-hidden w-full flex flex-row">
          <div className="h-[100%] w-[15%] min-w-[250px] bg-[#ffffff] px-10 pt-[40px] pb-[80px] text-left">
            <h1 className="font-bold text-2xl mb-5">Dashboard</h1>
            <div className="h-full max-h-[100%] w-full flex flex-col justify-between text-left">
              <div className="w-full h-fit flex flex-col gap-3">
                <div
                  className={`h-[40px] w-full flex items-center cursor-pointer  font-medium ${
                    current == 'My Schedule'
                      ? 'text-[#7272f1]'
                      : 'text-[#838383]'
                  }`}
                  onClick={(e) => {
                    window.location.href = '/myschedule';
                    const target = e.target as HTMLElement;
                    console.log(target.innerHTML);
                    setCurrent(`${target.innerHTML}`);
                  }}
                >
                  My Schedule
                </div>
                <div
                  className={`h-[40px] w-full flex items-center cursor-pointer font-medium ${
                    current == 'Manage Courses'
                      ? 'text-[#7272f1]'
                      : 'text-[#838383]'
                  }`}
                  onClick={(e) => {
                    window.location.href = '/mycourses';
                    const target = e.target as HTMLElement;
                    setCurrent(`${target.innerHTML}`);
                  }}
                >
                  Manage Courses
                </div>
              </div>
              <div className="w-full h-fit  flex flex-col gap-5">
                <div className="h-[40px] w-full flex items-center cursor-pointer   text-[#838383] font-medium">
                  Help and Support
                </div>
                <div
                  className="h-[40px] w-full flex items-center cursor-pointer   text-[#838383] font-medium"
                  onClick={() => {
                    localStorage.removeItem('user');
                    navigate('/landing');
                  }}
                >
                  Logout
                </div>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    );
  }
};
export default Navbar;
