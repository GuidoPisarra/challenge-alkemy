import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetListComponent} from './components/budget-list/budget-list.component';
import { BudgetFormComponent } from './components/budget-form/budget-form.component';
import { BudgetPreviewComponent } from './components/budget-preview/budget-preview.component';
import { UsersComponentComponent } from './components/users-component/users-component.component';
import { UsersRegisterComponent } from './components/users-register/users-register.component';
import { BudgetIndexComponent } from './components/budget-index/budget-index.component';

const routes: Routes = [{
  path:'index',
  component:BudgetIndexComponent
},
  {
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
  redirectTo: '/index',
  pathMatch : 'full'
},
{
  path:'users/signin',
  component: UsersComponentComponent

},
{
  path:'users/signup',
  component: UsersRegisterComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
