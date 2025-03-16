import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', 
})
export class BookService {
  private books: any[] = []; // Массив для хранения книг

  // Метод для добавления книги
  addBook(book: any): void {
    this.books.push(book);
  }

  // Метод для получения списка книг
  getBooks(): any[] {
    return this.books;
  }

  // Метод для фильтрации книг
  filterBooks(
    minPages: number,
    maxPages: number,
    genre: string,
    author: string,
    language: string
  ): any[] {
    return this.books.filter(
      (book) =>
        book.pages >= minPages &&
        book.pages <= maxPages &&
        (genre === 'Все жанры' || book.genre === genre) &&
        (author === '' || book.author.toLowerCase().includes(author.toLowerCase())) && // Фильтр по автору
        (language === 'Все языки' || book.language === language)
    );
  }
}