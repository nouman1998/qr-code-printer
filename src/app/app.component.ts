import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public stringQrCodes: Array<String> = null;

  constructor() {
    this.stringQrCodes = ['a', 'v', 'c', 'v'];
  }
  printPDF() {
    window.print();
  }
}
