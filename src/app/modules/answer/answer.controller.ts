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
import { AnswerService } from './answer.services';
import { Answer } from './answer.model';
import { IAnswer } from './answer.interface';

const createAnswer = catchAsync(async (req: Request, res: Response) => {
  const { ...Answer } = req.body;
  // console.log(Answer, 'from controller=================');

  const result = await AnswerService.createAnswerServices(Answer);
  if (result) {
    sendResponse(res, {
      success: true,
      message: 'successfully create Answer',
      statusCode: 200,
      data: result,
    });
    // next()
  }
});

const getALLAnswer = catchAsync(async (req: Request, res: Response) => {
  const data = await Answer.find({});
  sendResponse(res, {
    success: true,
    message: 'successfully get Answers',
    statusCode: 200,
    data: data,
  });
});

const getSingleAnswer = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await AnswerService.getSingleAnswer(id);
  // console.log(id,"id");

  sendResponse<IAnswer>(res, {
    statusCode: 200,
    success: true,
    message: 'Answer retrieved successfully !',
    data: result,
  });
});

const deleteAnswer = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await AnswerService.deleteAnswer(id);

  sendResponse<IAnswer>(res, {
    statusCode: 200,
    success: true,
    message: 'Student deleted successfully !',
    data: result,
  });
});

const updateAnswer = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedData = req.body;
  const result = await AnswerService.updateAnswer(id, updatedData);

  sendResponse<IAnswer>(res, {
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

  const verifiedAnswer = jwtHelpers.verifyToken(
    token as string,
    config.jwt.secret as Secret
  );

  const id = verifiedAnswer._id;

  const result = await AnswerService.myProfileServices(id);

  sendResponse<Partial<IAnswer>>(res, {
    statusCode: 200,
    success: true,
    message: "Answer's information retrieved successfully",
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

  const verifiedAnswer = jwtHelpers.verifyToken(
    token as string,
    config.jwt.secret as Secret
  );

  const id = verifiedAnswer?._id;

  const updatedData = req.body;

  const newUpdateData = updatedData;

  newUpdateData.password = await bcrypt.hash(updatedData?.password, Number(10));

  const result = await AnswerService.updateMyProfile(id, newUpdateData);

  sendResponse<Partial<IAnswer>>(res, {
    statusCode: 201,
    success: true,
    message: 'Answers information retrieved successfully',
    data: result,
  });
});

export const AnswerController = {
  createAnswer,
  getALLAnswer,
  getSingleAnswer,
  deleteAnswer,
  updateAnswer,
  myProfileController,
  updateMyProfile,
};
