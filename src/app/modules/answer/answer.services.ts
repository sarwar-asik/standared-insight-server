/* eslint-disable prefer-const */
/* eslint-disable no-console */

import ApiError from '../../../errors/ApiError';
import { IAnswer } from './answer.interface';
import { Answer } from './answer.model';

const createAnswerServices = async (
  Answers: IAnswer
): Promise<IAnswer | null> => {
  // console.log(Answer, 'from services');

  const createdAnswer = await Answer.create(Answers);
  if (!createdAnswer) {
    throw new ApiError(400, 'Failed to create new Answer');
  }
  return createdAnswer;
  // return null
};

const getSingleAnswer = async (id: string): Promise<IAnswer | null> => {
  const result = await Answer.findById(id);

  return result;
};

const deleteAnswer = async (id: string): Promise<IAnswer | null> => {
  const result = await Answer.findByIdAndDelete(id);

  return result;
};

const updateAnswer = async (
  id: string,
  payload: Partial<IAnswer>
): Promise<IAnswer | null> => {
  const result = await Answer.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const myProfileServices = async (
  id: string
): Promise<Partial<IAnswer> | null> => {
  const result = await Answer.findById(id).select('name phoneNumber address');

  return result;
};

const updateMyProfile = async (
  id: string,
  payload: Partial<IAnswer>
): Promise<Partial<IAnswer> | null> => {
  console.log(payload);

  const result = await Answer.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  let responseData = null;
  if (result) {
    return result;
  }
  return responseData;
};

export const AnswerService = {
  createAnswerServices,
  getSingleAnswer,
  deleteAnswer,
  updateAnswer,
  myProfileServices,
  updateMyProfile,
};
