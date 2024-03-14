"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlesWare/auth"));
const question_validation_1 = require("./question.validation");
const question_controller_1 = require("./question.controller");
const validateUserRequest_1 = __importDefault(require("../../middlesWare/validateUserRequest"));
const router = express_1.default.Router();
// it is optional
router.post('/', (0, validateUserRequest_1.default)(question_validation_1.QuestionValidation.createQuestionZodSchema), 
// auth(ENUM_USER_ROLE.ADMIN),
question_controller_1.QuestionController.createQuestion);
router.get('/:id', (0, auth_1.default)("admin" /* ENUM_USER_ROLE.ADMIN */), question_controller_1.QuestionController.getSingleQuestion);
router.get('/', 
//  auth(ENUM_USER_ROLE.ADMIN),
question_controller_1.QuestionController.getALLQuestion);
router.delete('/:id', (0, auth_1.default)("admin" /* ENUM_USER_ROLE.ADMIN */), question_controller_1.QuestionController.deleteQuestion);
router.patch('/:id', (0, validateUserRequest_1.default)(question_validation_1.QuestionValidation.updateQuestionZodSchema), (0, auth_1.default)("admin" /* ENUM_USER_ROLE.ADMIN */), question_controller_1.QuestionController.updateQuestion);
exports.questionRouter = router;
