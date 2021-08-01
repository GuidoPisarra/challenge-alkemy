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


  addBudget(description: HTMLInputElement, amount: HTMLInputElement, egress: HTMLInputElement): boolean{
    //console.log(parseFloat(amount.value)," ",amount.value);
    this.BudgetService.createBudget(description.value, parseFloat(amount.value) ,egress.checked)
      .subscribe(res =>{
        this.router.navigate(['/budget'])
      }, err => console.log(err))
    return false;
  }


}
