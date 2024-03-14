"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const question_route_1 = require("../modules/questions/question.route");
const answer_route_1 = require("../modules/answer/answer.route");
const router = express_1.default.Router();
const modulesRoutes = [
    {
        path: '/question',
        route: question_route_1.questionRouter,
    },
    {
        path: '/answer',
        route: answer_route_1.AnswerRouter,
    },
];
modulesRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
