import { BudgetService } from './../../services/budget.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent implements OnInit {

  constructor(private BudgetService:BudgetService, private router:Router) { }

  ngOnInit(): void {
  }


  addBudget(description: HTMLInputElement, amount: HTMLInputElement, egress: HTMLInputElement, day:HTMLInputElement, month:HTMLInputElement, year:HTMLInputElement): boolean{
    this.BudgetService.createBudget(description.value, parseFloat(amount.value) ,egress.checked, parseInt(day.value),parseInt(month.value),parseInt(year.value))
      .subscribe(res =>{
        this.router.navigate(['/budget'])
      }, err => console.log(err))
    return false;
  }


}
