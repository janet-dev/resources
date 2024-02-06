import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { AuthService } from './auth/auth.service'; // Import the AuthService class

// import { firebaseConfig } from './firebase.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent implements OnInit{
  title = 'Resources';
  navList = ['Home', 'Resources', 'Admin/Resources', 'Register', 'Login', 'Logout'];

  constructor(private authService: AuthService) {} // Declare authService as a property

  ngOnInit(): void {
      // https://bobbyhadz.com/blog/typescript-could-not-find-a-declaration-file-for-module
      // https://stackoverflow.com/questions/53115665/cannot-find-name-require-in-angular-7typescript-3-1-3
      const{ firebaseConfig } = require('./firebase.config'); 
      initializeApp(firebaseConfig);

  }

  isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  logout() {
    console.log('logging out');
    this.authService.logout();
  }

}
