import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Resources';
  navList = ['Home', 'Resources', 'Admin', 'Login', 'Register'];
}
