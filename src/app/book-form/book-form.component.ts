import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent {
  book = {
    title: '',
    author: '',
    description: '',
    pages: 0,
    language: '',
    genre: '',
  };

  languages = ['Русский', 'Английский', 'Французский']; 

  constructor(private bookService: BookService) {}

  onSubmit(): void {
    this.bookService.addBook({ ...this.book }); 
    this.resetForm();
  }

  resetForm(): void {
    this.book = {
      title: '',
      author: '',
      description: '',
      pages: 0,
      language: '',
      genre: '',
    };
  }
}