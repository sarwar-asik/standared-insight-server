import express from 'express';

import { questionRouter } from '../modules/questions/question.route';

const router = express.Router();

const modulesRoutes = [
  {
    path: '/question',
    route: questionRouter,
  },
];

modulesRoutes.forEach(route => router.use(route.path, route.route));

export default router;
