import aux from "mongoose";
const { Schema, model } = aux;

const questionsSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },
    firstAnswer: {
      type: String,
      required: true,
      trim: true,
    },
    secondAnswer: {
      type: String,
      required: true,
      trim: true,
    },
    counterFirstAnswer: {
      type: Number,
      required: false,
      trim: true,
    },
    counterSecondAnswer: {
      type: Number,
      required: false,
      trim: true,
    },
  },
  { versionKey: false }
);

export default model("Questions", questionsSchema);
