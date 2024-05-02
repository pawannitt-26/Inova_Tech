import mongoose from "mongoose";

const flashCardSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        },
    question: {
        type: String,
        required: [true, "Please enter the question"],
    },
    answer: {
        type: String,
        required: [true, "Please enter the answer"],
    },
    language: {
        type: String,
        required: [true, "Please enter the language"],
    },
    tutor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tutor",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const FlashCard = mongoose.model("FlashCard", flashCardSchema);

export default FlashCard;