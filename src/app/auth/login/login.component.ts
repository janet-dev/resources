import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MaterialDesignModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

}
