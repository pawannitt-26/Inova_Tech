import express from 'express';
import {createFlashCard, deleteFlashCard, getAllFlashCards, getFlashCardById,getFlashCardByLanguage, getFlashCardByTutor, updateFlashCard} from '../controllers/flashCardController'
import { protect, restricTo } from '../controllers/userController';

const router = express.Router();

router.get("/", protect, restricTo("STUDENT") , getAllFlashCards);
router.get("/:id", protect, restricTo("STUDENT") ,getFlashCardById);
router.get("/language/:language", protect, restricTo("STUDENT") ,getFlashCardByLanguage);
router.get("/tutor/:tutor", protect, restricTo("STUDENT") ,getFlashCardByTutor);
router.post("/", protect, restricTo("STUDENT") ,createFlashCard);
router.patch("/:id", protect, restricTo("STUDENT") ,updateFlashCard);
router.delete("/:id", protect, restricTo("STUDENT") ,deleteFlashCard);

export default router;