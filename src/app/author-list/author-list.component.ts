import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-author-list',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
})
export class AuthorListComponent {
  authors = ['Author 1', 'Author 2']; 
  newAuthor = ''; 

  
  addAuthor(): void {
    if (this.newAuthor && !this.authors.includes(this.newAuthor)) {
      this.authors.push(this.newAuthor);
      this.newAuthor = ''; 
    }
  }

  
  editAuthor(index: number): void {
    const newName = prompt('Введите новое имя автора:', this.authors[index]);
    if (newName) {
      this.authors[index] = newName; 
    }
  }
}