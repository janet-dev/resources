import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MaterialDesignModule } from 'src/app/material-design/material-design.module';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    MaterialDesignModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private router: Router) {}

  register() {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2000);
  }

}
