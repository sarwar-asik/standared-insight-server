"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionValidation = void 0;
const zod_1 = require("zod");
const createQuestionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        question: zod_1.z.string(),
        questionType: zod_1.z.string(),
        chartType: zod_1.z.string(),
        questionIndex: zod_1.z.number(),
        survey: zod_1.z.string(),
        questionText: zod_1.z.array(zod_1.z.string()),
        islibraryQuestion: zod_1.z.boolean(),
        isHidden: zod_1.z.boolean(),
        excludedCharts: zod_1.z.array(zod_1.z.string()),
        comments: zod_1.z.array(zod_1.z.string()),
    }),
});
const updateQuestionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        question: zod_1.z.string().optional(),
        questionType: zod_1.z.string().optional(),
        chartType: zod_1.z.string().optional(),
        questionIndex: zod_1.z.number().optional(),
        survey: zod_1.z.string().optional(),
        questionText: zod_1.z.array(zod_1.z.string()).optional(),
        islibraryQuestion: zod_1.z.boolean().optional(),
        isHidden: zod_1.z.boolean().optional(),
        excludedCharts: zod_1.z.array(zod_1.z.string()).optional(),
        comments: zod_1.z.array(zod_1.z.string()).optional(),
    }),
});
exports.QuestionValidation = {
    createQuestionZodSchema,
    updateQuestionZodSchema,
};
