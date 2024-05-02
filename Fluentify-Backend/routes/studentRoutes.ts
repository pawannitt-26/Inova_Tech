import { registerCourse, getMyCourses } from '../controllers/studentController';
import { protect, restricTo } from '../controllers/userController';
import express from 'express';

const router = express.Router();

router.get("/myCourses", protect, restricTo('STUDENT'), getMyCourses);
router.post('/registerCourse', protect, restricTo('STUDENT'), registerCourse);

export default router;
