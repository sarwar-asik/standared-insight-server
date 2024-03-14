/* eslint-disable prefer-const */
/* eslint-disable no-console */

import ApiError from '../../../errors/ApiError';
import { IQuestion } from './question.interface';
import { Question } from './questions.model';

const createQuestionServices = async (
  questions: IQuestion
): Promise<IQuestion | null> => {
  // console.log(Question, 'from services');

  const createdQuestion = await Question.create(questions);
  if (!createdQuestion) {
    throw new ApiError(400, 'Failed to create new Question');
  }
  return createdQuestion;
  // return null
};

const getSingleQuestion = async (id: string): Promise<IQuestion | null> => {
  const result = await Question.findById(id);

  return result;
};

const deleteQuestion = async (id: string): Promise<IQuestion | null> => {
  const result = await Question.findByIdAndDelete(id);

  return result;
};

const updateQuestion = async (
  id: string,
  payload: Partial<IQuestion>
): Promise<IQuestion | null> => {
  const result = await Question.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const myProfileServices = async (
  id: string
): Promise<Partial<IQuestion> | null> => {
  const result = await Question.findById(id).select('name phoneNumber address');

  return result;
};

const updateMyProfile = async (
  id: string,
  payload: Partial<IQuestion>
): Promise<Partial<IQuestion> | null> => {
  console.log(payload);

  const result = await Question.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  let responseData = null;
  if (result) {
    return result;
  }
  return responseData;
};

export const QuestionService = {
  createQuestionServices,
  getSingleQuestion,
  deleteQuestion,
  updateQuestion,
  myProfileServices,
  updateMyProfile,
};
