"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    description: String,
    amount: Number,
    egress: Boolean,
});
exports.default = mongoose_1.model('personal-budget', schema);
