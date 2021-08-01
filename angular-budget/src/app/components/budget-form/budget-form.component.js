"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetFormComponent = void 0;
const core_1 = require("@angular/core");
let BudgetFormComponent = class BudgetFormComponent {
    constructor(BudgetService) {
        this.BudgetService = BudgetService;
    }
    ngOnInit() {
    }
    addBudget(description, amount, egress) {
        this.BudgetService.createBudget(description.value, parseFloat(amount.value), egress.checked)
            .subscribe(res => console.log(res));
        return false;
    }
};
BudgetFormComponent = __decorate([
    core_1.Component({
        selector: 'app-budget-form',
        templateUrl: './budget-form.component.html',
        styleUrls: ['./budget-form.component.css']
    })
], BudgetFormComponent);
exports.BudgetFormComponent = BudgetFormComponent;
