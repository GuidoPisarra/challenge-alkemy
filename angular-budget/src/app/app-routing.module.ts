import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetListComponent} from './components/budget-list/budget-list.component';
import { BudgetFormComponent } from './components/budget-form/budget-form.component';
import { BudgetPreviewComponent } from './components/budget-preview/budget-preview.component';


const routes: Routes = [{
  path: 'budget',
  component: BudgetListComponent
},
{
  path : 'budget/new',
  component: BudgetFormComponent
},
{
  path: 'budget/:id',
  component : BudgetPreviewComponent
},
{
  path:'',
  redirectTo: '/budget',
  pathMatch : 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
