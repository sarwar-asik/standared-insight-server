/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';

export type IAnswer = {
  _id?: Types.ObjectId;
  submissionId: number;
  questionIndex: number;
  answer: string;
  other: boolean;
  otherField: string;
  survey: string;
};

// export type QuestionModel =Model<IQuestion,Record<string,unknown>>

export type AnswerModel = Model<IAnswer>;
