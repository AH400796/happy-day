import { Schema, model, models, Model, Document } from "mongoose";

interface IFeedback extends Document {
  userName: string;
  userFeedback: string;
  rating: string;
}

const feedbackSchema: Schema = new Schema(
  {
    userName: {
      type: String,
      minLength: 2,
      required: [true, "Ім'я обов'язкове"],
    },
    userFeedback: {
      type: String,
      minLength: 10,
      required: [true, "Відгук обов'язковий"],
    },
    rating: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const Feedback: Model<IFeedback> =
  models.Feedback || model("Feedback", feedbackSchema);

export default Feedback;
