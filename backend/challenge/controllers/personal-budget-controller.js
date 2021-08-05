"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBudget = exports.deleteBudget = exports.createBudget = exports.getBudget = exports.getBudgets = void 0;
const PersonalBudget_1 = __importDefault(require("../models/PersonalBudget"));
async function getBudgets(req, res) {
    const budgets = await PersonalBudget_1.default.find();
    return res.json(budgets);
}
exports.getBudgets = getBudgets;
async function getBudget(req, res) {
    const { id } = req.params;
    const budget = await PersonalBudget_1.default.findById(id);
    console.log(budget);
    return res.json(budget);
}
exports.getBudget = getBudget;
async function createBudget(req, res) {
    const { description, amount, egress, day, month, year } = req.body;
    const newBudget = {
        description: description,
        amount: amount,
        egress: egress,
        day: day,
        month: month,
        year: year,
    };
    const budget = new PersonalBudget_1.default(newBudget);
    await budget.save();
    return res.json({
        message: 'Budget successfully saved',
        budget
    });
}
exports.createBudget = createBudget;
async function deleteBudget(req, res) {
    const { id } = req.params;
    const budget = await PersonalBudget_1.default.findByIdAndRemove(id);
    return res.json({
        message: "Budget Deleted",
        budget
    });
}
exports.deleteBudget = deleteBudget;
async function updateBudget(req, res) {
    const { id } = req.params;
    const { description, amount, egress, day, month, year } = req.body;
    const updatedBudget = await PersonalBudget_1.default.findByIdAndUpdate(id, {
        description,
        amount,
        egress,
        day,
        month,
        year
    }, { new: true });
    return res.json({
        message: "Budget Updated",
        updatedBudget
    });
}
exports.updateBudget = updateBudget;
