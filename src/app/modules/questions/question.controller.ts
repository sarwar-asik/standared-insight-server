/* eslint-disable no-console */
import { Request, Response } from 'express';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponce';

import { jwtHelpers } from '../../../helpers/jwtHelpers';
import { Secret } from 'jsonwebtoken';

import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import bcrypt from 'bcrypt';
import config from '../../../config';
import { QuestionService } from './question.services';
import { Question } from './questions.model';
import { IQuestion } from './question.interface';

const createQuestion = catchAsync(async (req: Request, res: Response) => {
  const { ...Question } = req.body;
  // console.log(Question, 'from controller=================');

  const result = await QuestionService.createQuestionServices(Question);
  if (result) {
    sendResponse(res, {
      success: true,
      message: 'successfully create Question',
      statusCode: 200,
      data: result,
    });
    // next()
  }
});

const getALLQuestion = catchAsync(async (req: Request, res: Response) => {
  const data = await Question.find({});
  sendResponse(res, {
    success: true,
    message: 'successfully get Questions',
    statusCode: 200,
    data: data,
  });
});

const getSingleQuestion = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await QuestionService.getSingleQuestion(id);
  // console.log(id,"id");

  sendResponse<IQuestion>(res, {
    statusCode: 200,
    success: true,
    message: 'Question retrieved successfully !',
    data: result,
  });
});

const deleteQuestion = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await QuestionService.deleteQuestion(id);

  sendResponse<IQuestion>(res, {
    statusCode: 200,
    success: true,
    message: 'Student deleted successfully !',
    data: result,
  });
});

const updateQuestion = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedData = req.body;
  const result = await QuestionService.updateQuestion(id, updatedData);

  sendResponse<IQuestion>(res, {
    statusCode: 201,
    success: true,
    message: 'Academic Faculty updated successfully',
    data: result,
  });
});

const myProfileController = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new ApiError(httpStatus.UNAUTHORIZED, `You are not authorized`);
  }

  const verifiedQuestion = jwtHelpers.verifyToken(
    token as string,
    config.jwt.secret as Secret
  );

  const id = verifiedQuestion._id;

  const result = await QuestionService.myProfileServices(id);

  sendResponse<Partial<IQuestion>>(res, {
    statusCode: 200,
    success: true,
    message: "Question's information retrieved successfully",
    data: result,
  });
});

const updateMyProfile = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization;
  if (!token) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      `You are not Correct authorized`
    );
  }

  console.log(token);

  const verifiedQuestion = jwtHelpers.verifyToken(
    token as string,
    config.jwt.secret as Secret
  );

  const id = verifiedQuestion?._id;

  const updatedData = req.body;

  const newUpdateData = updatedData;

  newUpdateData.password = await bcrypt.hash(updatedData?.password, Number(10));

  const result = await QuestionService.updateMyProfile(id, newUpdateData);

  sendResponse<Partial<IQuestion>>(res, {
    statusCode: 201,
    success: true,
    message: 'Questions information retrieved successfully',
    data: result,
  });
});

export const QuestionController = {
  createQuestion,
  getALLQuestion,
  getSingleQuestion,
  deleteQuestion,
  updateQuestion,
  myProfileController,
  updateMyProfile,
};
