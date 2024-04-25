import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Phone';
  goToNewPage() {
    const newWindow = window.open('/get', '_blank', );
  }

  showNewProduct = false;
  getNewProduct = false;
  updateNewProduct = false;
  deleteProduct=false;
  deletedSuccessfully=false;
}
