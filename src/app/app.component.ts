import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visible = false;
  clickArray = [];

  switchParagraph() {
    this.visible = !this.visible;
    this.clickArray.push(new Date());
  }
}
