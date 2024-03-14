"use strict";
/* eslint-disable prefer-const */
/* eslint-disable no-console */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const questions_model_1 = require("./questions.model");
const createQuestionServices = (questions) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(Question, 'from services');
    const createdQuestion = yield questions_model_1.Question.create(questions);
    if (!createdQuestion) {
        throw new ApiError_1.default(400, 'Failed to create new Question');
    }
    return createdQuestion;
    // return null
});
const getSingleQuestion = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield questions_model_1.Question.findById(id);
    return result;
});
const deleteQuestion = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield questions_model_1.Question.findByIdAndDelete(id);
    return result;
});
const updateQuestion = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield questions_model_1.Question.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const myProfileServices = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield questions_model_1.Question.findById(id).select('name phoneNumber address');
    return result;
});
const updateMyProfile = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload);
    const result = yield questions_model_1.Question.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    let responseData = null;
    if (result) {
        return result;
    }
    return responseData;
});
exports.QuestionService = {
    createQuestionServices,
    getSingleQuestion,
    deleteQuestion,
    updateQuestion,
    myProfileServices,
    updateMyProfile,
};
