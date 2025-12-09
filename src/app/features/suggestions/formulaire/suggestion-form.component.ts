import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrls: ['./suggestion-form.component.css']
})
export class SuggestionFormComponent {

  categories: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre'
  ];

  suggestionForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {

    this.suggestionForm = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('^[A-Z][a-zA-Z ]*$')
        ]
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(30)
        ]
      ],
      category: ['', Validators.required],

      date: [{ value: new Date(), disabled: true }],
      status: [{ value: 'en attente', disabled: true }]
    });
  }

  submitForm() {
    if (this.suggestionForm.invalid) return;

    const newSuggestion = {
      id: Date.now(),         
      title: this.suggestionForm.value.title,
      description: this.suggestionForm.value.description,
      category: this.suggestionForm.value.category,
      date: new Date(),
      status: 'en attente',
      nbLikes: 0
    };

    console.log('Suggestion ajoutée :', newSuggestion);

    

    this.router.navigate(['/suggestion']); 
  }
}
