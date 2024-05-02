import { Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';
import Tutor from '../models/tutorModel';
import mongoose, { Types } from 'mongoose';
import User from '../models/userModel';

const isTutor = expressAsyncHandler(
  async (req: any, res: Response, next: any) => {
    const tutor = await Tutor.findOne({ user: req.user._id });
    if (!tutor) {
      res.status(403).json({
        status: 'fail',
        message: 'You are not a tutor yet. Please create a tutor profile.',
      });
      return;
    }
    next();
  }
);

const getSchedule = expressAsyncHandler(async (req: any, res) => {
  const tutor = await Tutor.findOne({ user: req.user._id });
  if (!tutor) {
    res.status(404).json({
      status: 'fail',
      message: 'Tutor not found',
    });
    return;
  }
  res.status(200).json({
    status: 'success',
    schedule: tutor,
  });
}
);

const createTutor = expressAsyncHandler(async (req: any, res) => {
  const { language, bio, availablePlans, resume } = req.body;
  const tutor = await Tutor.create({
    user: req.user._id,
    language,
    bio,
    availablePlans,
    resume,
  });
  res.status(201).json({
    status: 'success',
    tutor,
  });
});

const getAllTutors = expressAsyncHandler(async (req, res) => {
  const tutors = await Tutor.find();
  res.status(200).json({
    status: 'success',
    tutors,
  });
});

// const getSchedule = expressAsyncHandler(async (req: any, res) => {
//   const tutor = await Tutor.findById(req.params.id).populate('user');
//   if (!tutor) {
//     res.status(404).json({
//       status: 'fail',
//       message: 'Tutor not found',
//     });
//     return;
//   }
//   res.status(200).json({
//     status: 'success',
//     schedule: tutor,
//   });
// });

const getTutorByLanguage = expressAsyncHandler(async (req, res) => {
  const tutors = await Tutor.find({ language: req.params.language });
  res.status(200).json({
    status: 'success',
    tutors,
  });
});

const getTutorById = expressAsyncHandler(async (req, res) => {
  const tutor = await Tutor.findById(req.params.id);
  if (!tutor) {
    res.status(404).json({
      status: 'fail',
      message: 'Tutor not found',
    });
  }
  res.status(200).json({
    status: 'success',
    tutor,
  });
});

const updateTutor = expressAsyncHandler(async (req: any, res) => {
  console.log(req.params.id, 'id');
  const tutor = await Tutor.findOne({ user: req.params.id }).populate('user');
  const { languages, bio, experience } = req.body;
  if (!tutor) {
    res.status(404).json({
      status: 'fail',
      message: 'Tutor not found',
    });
    return;
  }
  tutor.languages = languages;
  tutor.bio = bio;
  // tutor.resume = resume;
  tutor.experience = experience;
  await tutor.save();
  res.status(200).json({
    status: 'success',
    tutor,
  });
});

// const updateTutorPlan = expressAsyncHandler(async (req: any, res) => {
//   const tutor = await Tutor.findById(req.user._id);
//   const { availablePlans } = req.body;
//   if (!tutor) {
//     res.status(404).json({
//       status: 'fail',
//       message: 'Tutor not found',
//     });
//     return;
//   }
//   tutor.availablePlans = availablePlans;
//   await tutor.save();
//   res.status(200).json({
//     status: 'success',
//     tutor,
//   });
// });

export {
  createTutor,
  getAllTutors,
  getTutorByLanguage,
  getTutorById,
  updateTutor,
  //   updateTutorPlan,
  getSchedule,
  isTutor,
};
