/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';

export type IQuestion = {
  _id?: Types.ObjectId;
  question: string;
  questionType: string;
  chartType: string;
  questionIndex: number;
  survey: string;
  questionText: string[];
  islibraryQuestion: boolean;
  isHidden: boolean;
  excludedCharts: string[];
  comments: string[];
};

// export type QuestionModel =Model<IQuestion,Record<string,unknown>>

export type QuestionModel = Model<IQuestion>;
