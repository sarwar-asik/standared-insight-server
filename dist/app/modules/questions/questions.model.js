"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const mongoose_1 = require("mongoose");
// const Roles = {
//   Seller : "seller",
//   Buyer :"buyer",
// }
const QuestionSchema = new mongoose_1.Schema({
    question: { type: String, required: true },
    questionType: { type: String, required: true },
    chartType: { type: String, required: true },
    questionIndex: { type: Number, required: true },
    survey: { type: String, required: true },
    questionText: { type: [String], default: [] },
    islibraryQuestion: { type: Boolean, required: true },
    isHidden: { type: Boolean, required: true },
    excludedCharts: { type: [String], default: [] },
    comments: { type: [String], default: [] },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Question = (0, mongoose_1.model)('Question', QuestionSchema);
