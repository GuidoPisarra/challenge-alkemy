import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import {Budget} from '../interfaces/budget'



@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  URI = 'http://localhost:4000/api/budgets'

  constructor(private http :HttpClient) { }


  createBudget(description : string , amount : Number , egress : boolean){
    let newBudget={

      "description":description,
      "amount":amount,
      "egress":egress
    }
    return this.http.post(this.URI,newBudget);


  }

  getBudgets (){

    return this.http.get<Budget[]>(this.URI)
  }

  deleteBudget(id?: string){
    return this.http.delete(this.URI+'/'+id);
  }
  updateBudget( description: string  , amount : Number, egress: boolean, id? : string){
    return this.http.put(this.URI+'/'+id, {description, amount,egress});
  }

}
