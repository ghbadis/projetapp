import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component'; // ✅ nom correct
import { SuggestionRoutingModule } from './suggestion-routing.module';

@NgModule({
  declarations: [
    ListSuggestionComponent   // ✅ utiliser exactement le même nom que le composant
  ],
  imports: [
    CommonModule,
    FormsModule,
    SuggestionRoutingModule
  ]
})
export class SuggestionModule {}
