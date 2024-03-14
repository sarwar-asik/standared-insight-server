import express from 'express';

import { questionRouter } from '../modules/questions/question.route';
import { AnswerRouter } from '../modules/answer/answer.route';

const router = express.Router();

const modulesRoutes = [
  {
    path: '/question',
    route: questionRouter,
  },
  {
    path: '/answer',
    route: AnswerRouter,
  },
];

modulesRoutes.forEach(route => router.use(route.path, route.route));

export default router;
