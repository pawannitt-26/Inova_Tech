import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Courses from './components/Courses/Courses';
import Schedule from './components/Schedule/Schedule';
import '@mantine/core/styles.css';
import BrowseCourse from './components/BrowseCourses/BrowseCourse';
import Video from './pages/Video/Video';
import ManageCourse from './components/ManageCourse/ManageCourse';
import Landing from './pages/Landing/Landing';
import Getstarted from './pages/Getstarted/Getstarted';
import TutorRegister from './pages/TutorRegister/TutorRegister';
import LearnerRegister from './pages/LearnerRegister/LearnerRegister';
import { ProfileProvider } from './pages/Profile/ProfileContext';
import Profile from './pages/Profile/Profile';
import CallRoom from './pages/CallRoom/CallRoom';
import CourseHome from './pages/CourseHome/CourseHome';
import CoursePage from './pages/CoursePage/CoursePage';
import CreateCourse from './pages/CreateCourse/CreateCourse';
import FlashCardCreate from './pages/FlashCards/FlashCardCreate';
import ViewFlashCard from './pages/FlashCards/ViewFlashCard';
import AttemptTest from './pages/Quiz/AttemptQuiz';
import CreateTest from './pages/Quiz/CreateQuiz';
import Resources from './pages/Resources/ResourceHub';
import QuizViewer from './pages/Quiz/QuizViewer';
import FlashCardHolder from './pages/FlashCards/FlashCardHolder';
import BoughtCourses from './components/BoughtCourses/BoughtCourses';

function App() {
  return (
    <div className="h-[100vh] w-[100vw]">
      <ProfileProvider>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/getstarted" element={<Getstarted />} />
          <Route path="/tutorregister" element={<TutorRegister />} />
          <Route path="/learnerregister" element={<LearnerRegister />} />
          <Route path="/" element={<Navbar />}>
            <Route index element={<Schedule />} />
            <Route path="myschedule" element={<Schedule />} />
            <Route path="createcourse" element={<CreateCourse />} />
            <Route path="mycourses" element={<Courses />} />
            <Route path="boughtCourses" element={<BoughtCourses />} />
            <Route path="mycourses/:id" element={<ManageCourse />} />
            <Route path="mycourses/desc/:id" element={<CourseHome />} />
            <Route path="courses" element={<BrowseCourse />} />
            <Route path="courses/:id" element={<CoursePage />} />
            <Route path="/createFlash" element={<FlashCardCreate />} />
            <Route path="/viewFlash" element={<ViewFlashCard />} />
            <Route path="/attemptQuiz" element={<AttemptTest />} />
            <Route path="/createTest" element={<CreateTest />} />
            <Route path="/myresources" element={<Resources />} />
            <Route path="/viewQuiz" element={<QuizViewer />} />
            <Route path="/displayFlashCards" element={<FlashCardHolder />} />
            <Route
              path="myprofile"
              element={<Profile bio={'hello Pawan'} name={'Pawan Kumar'} />}
            />
          </Route>
          <Route path="/video" element={<Video />} />
        </Routes>
      </ProfileProvider>
    </div>
  );
}

export default App;
