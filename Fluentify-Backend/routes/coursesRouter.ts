import express from 'express';
import { protect, restricTo } from '../controllers/userController';
import {
  createCourse,
  deleteCourse,
  getAllAvailableCourses,
  getAllStudentCourses,
  getAllTutorCourses,
  updateCourse,
  getCourseById,
} from '../controllers/coursesController';

const router = express.Router();

router.get(
  '/',
  // protect, restricTo('STUDENT'),
  getAllAvailableCourses
);
router.get(
  '/:id',
  //  protect, restricTo('STUDENT'),
  getCourseById
);
router.get(
  '/all/:id',
  protect,
  // restricTo('STUDENT'),
  getAllTutorCourses
);
router.post(
  '/createCourse',
  //  protect, restricTo("TUTOR"),
  createCourse
);
router.patch('/updateCourse', protect, restricTo('TUTOR'), updateCourse);
router.delete(
  '/deleteCourse/:id',
  protect,
  restricTo('TUTOR', 'ADMIN'),
  deleteCourse
);

export default router;
