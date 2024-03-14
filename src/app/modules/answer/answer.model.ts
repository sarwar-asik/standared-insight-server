/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { Schema, model } from 'mongoose';
import { IAnswer, AnswerModel } from './answer.interface';

// const Roles = {
//   Seller : "seller",
//   Buyer :"buyer",
// }

const AnswerSchema: Schema<IAnswer> = new Schema<IAnswer>(
  {
    submissionId: { type: Number, required: true },
    questionIndex: { type: Number, required: true },
    answer: { type: String, required: true },
    other: { type: Boolean, required: true },
    otherField: { type: String, default: '' },
    survey: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Answer = model<IAnswer, AnswerModel>('Answer', AnswerSchema);
