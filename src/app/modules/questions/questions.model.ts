/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { Schema, Types, model } from 'mongoose';
import { IQuestion, QuestionModel } from './question.interface';


// const Roles = {
//   Seller : "seller",
//   Buyer :"buyer",
// }

const QuestionSchema: Schema<IQuestion> = new Schema<IQuestion>(
  {
    question: { type: String, required: true },
    questionType: { type: String, required: true },
    chartType: { type: String, required: true },
    questionIndex: { type: Number, required: true },
    survey: { type: String, required: true },
    questionText: { type: [String], default: [] },
    islibraryQuestion: { type: Boolean, required: true },
    isHidden: { type: Boolean, required: true },
    excludedCharts: { type: [String], default: [] },
    comments: { type: [String], default: [] },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Question = model<IQuestion, QuestionModel>(
  'Question',
  QuestionSchema
);
