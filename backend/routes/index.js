"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const personal_budget_controller_1 = require("../src/controllers/personal-budget-controller");
router.route('/budgets')
    .get(personal_budget_controller_1.getBudgets)
    .post(personal_budget_controller_1.createBudget);
router.route('/budgets/:id')
    .get(personal_budget_controller_1.getBudget)
    .delete(personal_budget_controller_1.deleteBudget)
    .put(personal_budget_controller_1.updateBudget);
exports.default = router;
