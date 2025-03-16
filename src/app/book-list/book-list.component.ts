import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
  ],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  minPages: number = 0;
  maxPages: number = 1000;
  selectedGenre: string = 'Все жанры';
  selectedAuthor: string = ''; 
  selectedLanguage: string = ''; 
  genres: string[] = ['Все жанры', 'Фантастика', 'Детектив', 'Роман']; 
  languages: string[] = ['Все языки', 'Русский', 'Английский', 'Французский']; 
  filteredBooks: any[] = [];

  constructor(private bookService: BookService) {
    this.filterBooks(); 
  }

  // Метод для фильтрации книг
  filterBooks(): void {
    this.filteredBooks = this.bookService.filterBooks(
      this.minPages,
      this.maxPages,
      this.selectedGenre,
      this.selectedAuthor,
      this.selectedLanguage
    );
  }

  // Метод для получения уникальных жанров
  getUniqueGenres(): string[] {
    const books = this.bookService.getBooks();
    const genres = new Set(books.map((book: any) => book.genre));
    return ['Все жанры', ...genres];
  }
}