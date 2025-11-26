import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';
import { not } from 'rxjs/internal/util/not';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path:'',redirectTo : 'home', pathMatch: 'full' },
  {path : 'home',component : HomeComponent },
  {path : 'suggestion',component : ListSuggestionComponent }  ,
  {path : '**',component:NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
