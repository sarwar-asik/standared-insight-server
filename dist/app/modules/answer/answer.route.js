"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlesWare/auth"));
const answer_validation_1 = require("./answer.validation");
const answer_controller_1 = require("./answer.controller");
const validateUserRequest_1 = __importDefault(require("../../middlesWare/validateUserRequest"));
const router = express_1.default.Router();
// it is optional
router.post('/', (0, validateUserRequest_1.default)(answer_validation_1.AnswerValidation.createAnswerZodSchema), 
// auth(ENUM_USER_ROLE.ADMIN),
answer_controller_1.AnswerController.createAnswer);
router.get('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
answer_controller_1.AnswerController.getSingleAnswer);
router.get('/', 
// auth(ENUM_USER_ROLE.ADMIN),
answer_controller_1.AnswerController.getALLAnswer);
router.delete('/:id', (0, auth_1.default)("admin" /* ENUM_USER_ROLE.ADMIN */), answer_controller_1.AnswerController.deleteAnswer);
router.patch('/:id', (0, validateUserRequest_1.default)(answer_validation_1.AnswerValidation.updateAnswerZodSchema), (0, auth_1.default)("admin" /* ENUM_USER_ROLE.ADMIN */), answer_controller_1.AnswerController.updateAnswer);
exports.AnswerRouter = router;
