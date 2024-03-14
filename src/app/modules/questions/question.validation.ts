import { z } from 'zod';

const createQuestionZodSchema = z.object({
  body: z.object({
    question: z.string(),
    questionType: z.string(),
    chartType: z.string(),
    questionIndex: z.number(),
    survey: z.string(),
    questionText: z.array(z.string()),
    islibraryQuestion: z.boolean(),
    isHidden: z.boolean(),
    excludedCharts: z.array(z.string()),
    comments: z.array(z.string()),
  }),
});

const updateQuestionZodSchema = z.object({
  body: z.object({
    question: z.string().optional(),
    questionType: z.string().optional(),
    chartType: z.string().optional(),
    questionIndex: z.number().optional(),
    survey: z.string().optional(),
    questionText: z.array(z.string()).optional(),
    islibraryQuestion: z.boolean().optional(),
    isHidden: z.boolean().optional(),
    excludedCharts: z.array(z.string()).optional(),
    comments: z.array(z.string()).optional(),
  }),
});

export const QuestionValidation = {
  createQuestionZodSchema,
  updateQuestionZodSchema,
};
