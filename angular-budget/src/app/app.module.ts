import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BudgetFormComponent } from './components/budget-form/budget-form.component';
import { BudgetPreviewComponent } from './components/budget-preview/budget-preview.component';
import { BudgetListComponent } from './components/budget-list/budget-list.component';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BudgetFormComponent,
    BudgetPreviewComponent,
    BudgetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
