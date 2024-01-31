import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
// import { firebaseConfig } from './firebase.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit{
  
  title = 'Resources';
  navList = ['Home', 'Resources', 'Admin/Resources', 'Login', 'Register'];

  ngOnInit(): void {
      // https://bobbyhadz.com/blog/typescript-could-not-find-a-declaration-file-for-module
      // https://stackoverflow.com/questions/53115665/cannot-find-name-require-in-angular-7typescript-3-1-3
      const{ firebaseConfig } = require('./firebase.config'); 
      initializeApp(firebaseConfig);
  }
}
