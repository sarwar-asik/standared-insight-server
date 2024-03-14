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
exports.AnswerService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const answer_model_1 = require("./answer.model");
const createAnswerServices = (Answers) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(Answer, 'from services');
    const createdAnswer = yield answer_model_1.Answer.create(Answers);
    if (!createdAnswer) {
        throw new ApiError_1.default(400, 'Failed to create new Answer');
    }
    return createdAnswer;
    // return null
});
const getSingleAnswer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield answer_model_1.Answer.findById(id);
    return result;
});
const deleteAnswer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield answer_model_1.Answer.findByIdAndDelete(id);
    return result;
});
const updateAnswer = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield answer_model_1.Answer.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const myProfileServices = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield answer_model_1.Answer.findById(id).select('name phoneNumber address');
    return result;
});
const updateMyProfile = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload);
    const result = yield answer_model_1.Answer.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    let responseData = null;
    if (result) {
        return result;
    }
    return responseData;
});
exports.AnswerService = {
    createAnswerServices,
    getSingleAnswer,
    deleteAnswer,
    updateAnswer,
    myProfileServices,
    updateMyProfile,
};
