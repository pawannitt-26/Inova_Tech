import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const userEnrolledCoursesSchema = new mongoose.Schema({
  user: { type: ObjectId, required: true, ref: 'User' },
  enrolledCoursesArray: [
    {
      courseID: { type: mongoose.Types.ObjectId, ref: 'Courses' },
      courseBookedSlot: {
        Monday: [Number],
        Tuesday: [Number],
        Wednesday: [Number],
        Thursday: [Number],
        Friday: [Number],
        Saturday: [Number],
        Sunday: [Number],
      },
    },
  ],
});

const EnrolledCourses = mongoose.model(
  'EnrolledCourses',
  userEnrolledCoursesSchema
);  

export default EnrolledCourses;
