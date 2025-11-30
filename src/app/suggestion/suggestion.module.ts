import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component'; 
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';
import { SuggestionRoutingModule } from './suggestion-routing.module';

@NgModule({
  declarations: [
    ListSuggestionComponent,   
    SuggestionDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SuggestionRoutingModule
  ]
})
export class SuggestionModule {}