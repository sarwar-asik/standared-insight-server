import { z } from 'zod';

const createAnswerZodSchema = z.object({
  body: z.object({
    submissionId: z.number(),
    questionIndex: z.number(),
    answer: z.string(),
    other: z.boolean(),
    otherField: z.string().optional(),
    survey: z.string(),
  }),
});

const updateAnswerZodSchema = z.object({
  body: z.object({
    submissionId: z.number().optional(),
    questionIndex: z.number().optional(),
    answer: z.string().optional(),
    other: z.boolean().optional(),
    otherField: z.string().optional().optional(),
    survey: z.string().optional(),
  }),
});

export const AnswerValidation = {
  createAnswerZodSchema,
  updateAnswerZodSchema,
};
