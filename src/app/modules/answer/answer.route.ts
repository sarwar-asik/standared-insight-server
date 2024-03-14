import express from 'express';

import auth from '../../middlesWare/auth';

import { AnswerValidation } from './answer.validation';
import { AnswerController } from './answer.controller';
import validateRequest from '../../middlesWare/validateUserRequest';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

// it is optional

router.post(
  '/',
  validateRequest(AnswerValidation.createAnswerZodSchema),
  // auth(ENUM_USER_ROLE.ADMIN),
  AnswerController.createAnswer
);

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  AnswerController.getSingleAnswer
);

router.get('/', auth(ENUM_USER_ROLE.ADMIN), AnswerController.getALLAnswer);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  AnswerController.deleteAnswer
);

router.patch(
  '/:id',
  validateRequest(AnswerValidation.updateAnswerZodSchema),
  auth(ENUM_USER_ROLE.ADMIN),
  AnswerController.updateAnswer
);

export const AnswerRouter = router;
