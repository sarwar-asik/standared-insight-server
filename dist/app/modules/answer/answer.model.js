"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Answer = void 0;
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const mongoose_1 = require("mongoose");
// const Roles = {
//   Seller : "seller",
//   Buyer :"buyer",
// }
const AnswerSchema = new mongoose_1.Schema({
    submissionId: { type: Number, required: true },
    questionIndex: { type: Number, required: true },
    answer: { type: String, required: true },
    other: { type: Boolean, required: true },
    otherField: { type: String, default: '' },
    survey: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Answer = (0, mongoose_1.model)('Answer', AnswerSchema);
