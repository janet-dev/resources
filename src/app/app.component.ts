import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialDesignModule } from './material-design/material-design.module';


@Component({
  selector: 'app-root',
  imports:  [
    CommonModule, 
    RouterModule, 
    MaterialDesignModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true
})
export class AppComponent {
  title = 'resources';
}
