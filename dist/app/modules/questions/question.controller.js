"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponce_1 = __importDefault(require("../../../shared/sendResponce"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../../config"));
const question_services_1 = require("./question.services");
const questions_model_1 = require("./questions.model");
const createQuestion = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Question = __rest(req.body, []);
    // console.log(Question, 'from controller=================');
    const result = yield question_services_1.QuestionService.createQuestionServices(Question);
    if (result) {
        (0, sendResponce_1.default)(res, {
            success: true,
            message: 'successfully create Question',
            statusCode: 200,
            data: result,
        });
        // next()
    }
}));
const getALLQuestion = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield questions_model_1.Question.find({});
    (0, sendResponce_1.default)(res, {
        success: true,
        message: 'successfully get Questions',
        statusCode: 200,
        data: data,
    });
}));
const getSingleQuestion = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield question_services_1.QuestionService.getSingleQuestion(id);
    // console.log(id,"id");
    (0, sendResponce_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Question retrieved successfully !',
        data: result,
    });
}));
const deleteQuestion = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield question_services_1.QuestionService.deleteQuestion(id);
    (0, sendResponce_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Student deleted successfully !',
        data: result,
    });
}));
const updateQuestion = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updatedData = req.body;
    const result = yield question_services_1.QuestionService.updateQuestion(id, updatedData);
    (0, sendResponce_1.default)(res, {
        statusCode: 201,
        success: true,
        message: 'Academic Faculty updated successfully',
        data: result,
    });
}));
const myProfileController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization;
    if (!token) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, `You are not authorized`);
    }
    const verifiedQuestion = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt.secret);
    const id = verifiedQuestion._id;
    const result = yield question_services_1.QuestionService.myProfileServices(id);
    (0, sendResponce_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Question's information retrieved successfully",
        data: result,
    });
}));
const updateMyProfile = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization;
    if (!token) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, `You are not Correct authorized`);
    }
    console.log(token);
    const verifiedQuestion = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt.secret);
    const id = verifiedQuestion === null || verifiedQuestion === void 0 ? void 0 : verifiedQuestion._id;
    const updatedData = req.body;
    const newUpdateData = updatedData;
    newUpdateData.password = yield bcrypt_1.default.hash(updatedData === null || updatedData === void 0 ? void 0 : updatedData.password, Number(10));
    const result = yield question_services_1.QuestionService.updateMyProfile(id, newUpdateData);
    (0, sendResponce_1.default)(res, {
        statusCode: 201,
        success: true,
        message: 'Questions information retrieved successfully',
        data: result,
    });
}));
exports.QuestionController = {
    createQuestion,
    getALLQuestion,
    getSingleQuestion,
    deleteQuestion,
    updateQuestion,
    myProfileController,
    updateMyProfile,
};
