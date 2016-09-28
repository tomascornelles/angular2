import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class MiApp {
  title = 'Manual de Angular 2';
  visible = false;
  decirAdios() {
    this.visible = true;
  }
}