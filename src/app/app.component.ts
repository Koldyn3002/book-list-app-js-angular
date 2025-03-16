import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BookFormComponent, BookListComponent], 
  template: `
    <h1>Мое приложение</h1>
    <app-book-form></app-book-form>
    <app-book-list></app-book-list>
  `,
})
export class AppComponent {}