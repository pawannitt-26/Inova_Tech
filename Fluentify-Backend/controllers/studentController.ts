import Student from '../models/studentModel';
import expressAsyncHandler from 'express-async-handler';
import Tutor from '../models/tutorModel';
import Courses from '../models/courseModel';
import EnrolledCourses from '../models/enrolledCoursesModel';
// import stripe from "../utils/stripe";

const registerCourse = expressAsyncHandler(async (req: any, res) => {
  const { course, timeSlots, tutorId } = req.body;
  const student = await Student.findOne({ user: req.user._id });
  const selectedCourse = await Courses.findById(course);
  const enrolledCourse = await EnrolledCourses.findOne({ user: req.user._id });
  console.log('Id    ', tutorId);
  const tutor = await Tutor.findOne({
    user: tutorId,
  });
  if (!student) {
    res.status(404).json({
      status: 'fail',
      message: 'Student not found',
    });
    return;
  }
  if (!tutor) {
    res.status(404).json({
      status: 'fail',
      message: 'Tutor not found',
    });
    return;
  }
  if (!selectedCourse || !selectedCourse.duration || !selectedCourse.price) {
    res.status(404).json({
      status: 'fail',
      message: 'Course not found',
    });
    return;
  }

  const numberOfSlots =
    timeSlots?.Monday?.length ||
    0 + timeSlots?.Tuesday?.length ||
    0 + timeSlots?.Wednesday?.length ||
    0 + timeSlots?.Thursday?.length ||
    0 + timeSlots?.Friday?.length ||
    0 + timeSlots?.Saturday?.length ||
    0 + timeSlots?.Sunday?.length ||
    0;

  const coursePrice =
    selectedCourse.price * numberOfSlots * 4 * selectedCourse.duration;

  // if (student.credits < coursePrice) {
  //   res.status(400).json({
  //     status: 'fail',
  //     message: 'You need more credits!',
  //   });
  //   return;
  // }

  if (!selectedCourse.bookedSlots) {
    selectedCourse.bookedSlots = {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: [],
    };
  }

  Object.keys(timeSlots).forEach((day: string) => {
    timeSlots[day].forEach((slot: any) => {
      if (
        selectedCourse.bookedSlots &&
        selectedCourse.bookedSlots[
          day as keyof typeof selectedCourse.bookedSlots
        ].includes(slot)
      ) {
        res.status(400).json({
          status: 'fail',
          message: 'Invalid time slot',
        });
        return;
      } else {
        selectedCourse.bookedSlots &&
          selectedCourse.bookedSlots[
            day as keyof typeof selectedCourse.bookedSlots
          ].push(slot);
      }
    });
  });

  // create an entry if it does not exist, otherwise update existing entry
  if (!enrolledCourse) {
    console.log(timeSlots, 'timeSlots');
    await EnrolledCourses.create({
      user: req.user._id,
      enrolledCoursesArray: [{ courseID: course, courseBookedSlot: timeSlots }],
    });
  } else {
    enrolledCourse.enrolledCoursesArray.push({
      courseID: course,
      courseBookedSlot: timeSlots,
    });
    await enrolledCourse?.save();
  }

  const expiresIn = new Date();
  student.credits -= coursePrice;
  expiresIn.setMonth(expiresIn.getMonth() + 1);
  student.tutorsRegistered.push({ tutor, course, expiresIn });
  await selectedCourse.save();
  await student.save();
  res.status(200).json({
    status: 'success',
    student,
  });
});

const getMyCourses = expressAsyncHandler(async (req: any, res) => {
  const courses = await EnrolledCourses.findOne({
    user: req.user._id,
  }).populate({
    path: 'enrolledCoursesArray',
    populate: {
      path: 'courseID',
      model: 'Courses',
    },
  });
  res.status(200).json({
    status: 'success',
    courses,
  });
  return;
});

export { registerCourse, getMyCourses };
