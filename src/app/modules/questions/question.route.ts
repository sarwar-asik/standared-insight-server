import express from 'express';

import auth from '../../middlesWare/auth';

import { QuestionValidation } from './question.validation';
import { QuestionController } from './question.controller';
import validateRequest from '../../middlesWare/validateUserRequest';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

// it is optional

router.post(
  '/create-question',
  validateRequest(QuestionValidation.createQuestionZodSchema),
  auth(ENUM_USER_ROLE.ADMIN),
  QuestionController.createQuestion
);

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  QuestionController.getSingleQuestion
);

router.get('/', auth(ENUM_USER_ROLE.ADMIN), QuestionController.getALLQuestion);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  QuestionController.deleteQuestion
);


router.patch(
  '/:id',
  validateRequest(QuestionValidation.updateQuestionZodSchema),
  auth(ENUM_USER_ROLE.ADMIN),
  QuestionController.updateQuestion
);

export const questionRouter = router;
