"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const todoSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    status: {
        type: Boolean,
        required: false
    }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Todo", todoSchema);
