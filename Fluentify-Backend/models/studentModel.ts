import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  tutorsRegistered: [
    {
      tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tutor',
      },
      plan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plan',
      },
      expiresIn: Date,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  credits: {
    type: Number,
    default: 100,
  },
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
