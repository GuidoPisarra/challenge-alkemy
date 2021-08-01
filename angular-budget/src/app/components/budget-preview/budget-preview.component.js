"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetPreviewComponent = void 0;
const core_1 = require("@angular/core");
let BudgetPreviewComponent = class BudgetPreviewComponent {
    constructor() { }
    ngOnInit() {
    }
};
BudgetPreviewComponent = __decorate([
    core_1.Component({
        selector: 'app-budget-preview',
        templateUrl: './budget-preview.component.html',
        styleUrls: ['./budget-preview.component.css']
    })
], BudgetPreviewComponent);
exports.BudgetPreviewComponent = BudgetPreviewComponent;
