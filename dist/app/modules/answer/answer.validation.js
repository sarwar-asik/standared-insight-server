"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerValidation = void 0;
const zod_1 = require("zod");
const createAnswerZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        submissionId: zod_1.z.number(),
        questionIndex: zod_1.z.number(),
        answer: zod_1.z.string(),
        other: zod_1.z.boolean(),
        otherField: zod_1.z.string().optional(),
        survey: zod_1.z.string(),
    }),
});
const updateAnswerZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        submissionId: zod_1.z.number().optional(),
        questionIndex: zod_1.z.number().optional(),
        answer: zod_1.z.string().optional(),
        other: zod_1.z.boolean().optional(),
        otherField: zod_1.z.string().optional().optional(),
        survey: zod_1.z.string().optional(),
    }),
});
exports.AnswerValidation = {
    createAnswerZodSchema,
    updateAnswerZodSchema,
};
