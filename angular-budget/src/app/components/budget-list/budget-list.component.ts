//import { Router } from 'express';
import { Budget } from './../../interfaces/budget';
import { BudgetService } from './../../services/budget.service';
import { Component, OnInit } from '@angular/core';
import { HttpClientJsonpModule } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import {Router} from '@angular/router';


@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {

  budgets : Budget[]  = [ ];


  constructor(private BudgetService: BudgetService, private routerN:Router) { }

  ngOnInit(): void {
    this.BudgetService.getBudgets()
      .subscribe(
        res=>(
          this.budgets=res
        ),
        err=>console.log(err)
      )

  }

  selectedBudget (id?: string){
    console.log(id);
  }
  deleteBudget(id?: string){
    this.BudgetService.deleteBudget(id)
    .subscribe(
      res =>{
        this.BudgetService.deleteBudget(id),
        this.routerN.navigate(['/budget']),
        window.location.reload()
      },
      err => console.log(err)
    )
  }

  updateBudget ( description: string  , amount : Number, egress: boolean, id? : string){
    this.BudgetService.updateBudget(description,amount,egress,id)
    .subscribe(
      res=> {
        this.routerN.navigate(['/budget'])
      },
      err=>console.log(err)
    )
  }



}
