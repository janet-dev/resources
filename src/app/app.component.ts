import { Component } from '@angular/core';
import { MaterialDesignModule } from './material-design/material-design.module';

import { LoginComponent } from './auth/login/login.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports:  [
    CommonModule,
    RouterOutlet, 
    MaterialDesignModule,
    LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true
})
export class AppComponent {
  title = 'resources';
}
