import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {

  showAlert(message: string, className: string): void {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert ${className}`;
    alertDiv.appendChild(document.createTextNode(message));

    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container?.insertBefore(alertDiv, form);

   
    setTimeout(() => {
      alertDiv.remove();
    }, 3000);
  }
}