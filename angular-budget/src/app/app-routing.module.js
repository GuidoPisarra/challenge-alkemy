"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const budget_list_component_1 = require("./components/budget-list/budget-list.component");
const budget_form_component_1 = require("./components/budget-form/budget-form.component");
const budget_preview_component_1 = require("./components/budget-preview/budget-preview.component");
const routes = [{
        path: 'budget',
        component: budget_list_component_1.BudgetListComponent
    },
    {
        path: 'budget/new',
        component: budget_form_component_1.BudgetFormComponent
    },
    {
        path: 'budget/:id',
        component: budget_preview_component_1.BudgetPreviewComponent
    },
    {
        path: '',
        redirectTo: '/budget',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
