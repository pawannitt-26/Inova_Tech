import expressAsyncHandler from "express-async-handler";
import FlashCard from "../models/flashCardModel";
import mongoose from "mongoose";

const createFlashCard = expressAsyncHandler(async (req: any, res) => {
  const { question, answer, language, tutor } = req.body;
  const flashCard = await FlashCard.create({
    user: req.user._id,
    question,
    answer,
    language,
    tutor,
  });
  res.status(201).json({
    status: "success",
    flashCard,
  });
});

const getAllFlashCards = expressAsyncHandler(async (req, res) => {
  const flashCards = await FlashCard.find();
  res.status(200).json({
    status: "success",
    flashCards,
  });
});

const getFlashCardByLanguage = expressAsyncHandler(async (req: any, res) => {
  const flashCards = await FlashCard.find({
    user: req.user._id,
    language: req.params.language,
  });
  res.status(200).json({
    status: "success",
    flashCards,
  });
});

const getFlashCardByTutor = expressAsyncHandler(async (req: any, res) => {
  const flashCards = await FlashCard.find({
    user: req.user._id,
    tutor: req.params.tutor,
  });
  res.status(200).json({
    status: "success",
    flashCards,
  });
});

const getFlashCardById = expressAsyncHandler(async (req: any, res) => {
  const flashCard = await FlashCard.findOne({
    user: req.user._id,
    _id: new mongoose.Types.ObjectId(req.params.id),
  });
  if (!flashCard) {
    res.status(404).json({
      status: "fail",
      message: "Flash card not found",
    });
  }
  res.status(200).json({
    status: "success",
    flashCard,
  });
});

const updateFlashCard = expressAsyncHandler(async (req: any, res) => {
  const flashCard = await FlashCard.findOne({
    user: req.user._id,
    _id: new mongoose.Types.ObjectId(req.params.id),
  });
  const { question, answer } = req.body;
  if (!flashCard) {
    res.status(404).json({
      status: "fail",
      message: "Flash card not found",
    });
    return;
  }
  if (question) flashCard.question = question;
  if (answer) flashCard.answer = answer;
  await flashCard.save();
  res.status(200).json({
    status: "success",
    flashCard,
  });
});

const deleteFlashCard = expressAsyncHandler(async (req: any, res) => {
  const flashCard = await FlashCard.findByIdAndDelete({
    user: req.user._id,
    _id: req.params.id,
  });
  if (!flashCard) {
    res.status(404).json({
      status: "fail",
      message: "Flash card not found",
    });
    return;
  }
  res.status(200).json({
    status: "success",
    message: "Flash card deleted",
  });
});

export {
  createFlashCard,
  getAllFlashCards,
  getFlashCardByLanguage,
  getFlashCardByTutor,
  getFlashCardById,
  updateFlashCard,
  deleteFlashCard,
};
