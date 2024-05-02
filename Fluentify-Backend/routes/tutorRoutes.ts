import express from 'express';
import {
  getTutorById,
  getTutorByLanguage,
  getAllTutors,
  createTutor,
  updateTutor,
  isTutor,
  getSchedule,
} from '../controllers/tutorController';
import { protect, restricTo } from '../controllers/userController';

const router = express.Router();

router.get('/', getAllTutors);
router.get('/:id', getTutorById);
router.get('/schedule',protect, getSchedule);

router.get('/language/:language', getTutorByLanguage);
router.post('/', protect, restricTo('TUTOR'), createTutor);
router.get('/schedule/:id', getSchedule);
router.patch(
  '/:id',
  // protect, restricTo('TUTOR'), isTutor,
  updateTutor
);
// router.patch("/plan/:id", protect, restricTo("TUTOR"), isTutor ,updateTutorPlan);

export default router;
