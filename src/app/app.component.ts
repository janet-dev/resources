import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { AuthService } from './auth/auth.service'; // Import the AuthService class
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit{
  title = 'Resources';
  navList = ['Home', 'Register', 'Login'];
  admin: string = 'BlM23QBsAOQWrW1QBgONrepiOdC3';

  constructor(private authService: AuthService) {} // Declare authService as a property

  ngOnInit(): void {
      // https://bobbyhadz.com/blog/typescript-could-not-find-a-declaration-file-for-module
      // https://stackoverflow.com/questions/53115665/cannot-find-name-require-in-angular-7typescript-3-1-3
      const{ firebaseConfig } = require('./firebase.config'); 
      initializeApp(firebaseConfig);

  }

  isAuthenticated() {
    if (this.authService.isAuthenticated && getAuth().currentUser?.uid === this.admin) { 
      this.navList = ['Home', 'Resources', 'Admin/Resources' ];
    } else if (this.authService.isAuthenticated) {
      this.navList = ['Home', 'Resources'];
    } else {
      this.navList = ['Home', 'Register', 'Login'];
    }
    return this.authService.isAuthenticated;
  }

  logout() {
    console.log('logging out');
    this.authService.logout();
  }

}
