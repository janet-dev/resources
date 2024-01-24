import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialDesignModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = new FormControl('');

  constructor(private router: Router) {}

  login() {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2000);
  }

}