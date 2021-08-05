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
  total: Number = 0;


  constructor(private BudgetService: BudgetService, private routerN:Router) { }

  ngOnInit(): void {
    let tot: Number=0;
    this.BudgetService.getBudgets()
      .subscribe(
        res=>(
          this.budgets=res,
          this.total= this.totalBudgets()
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

  totalBudgets() : number {

    let tot: number = 0;

    this.budgets.forEach((e:any) => {
      if(e.egress){
        tot = tot - Number(e.amount);
      }else{
        tot = tot + Number(e.amount);
      }
    });

    return tot;
}




}
