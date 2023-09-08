import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from '../material-design/material-design.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MaterialDesignModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
