import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { AuthService } from './auth/auth.service'; // Import the AuthService class
import { getAuth } from 'firebase/auth';
import { getDocs, getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit{
  title = 'Resources';
  navList = ['Home', 'Register', 'Login'];
  admin: string = 'BlM23QBsAOQWrW1QBgONrepiOdC3';


  constructor(private authService: AuthService) {


  } // Declare authService as a property

  async ngOnInit(): Promise<void> {
      // https://bobbyhadz.com/blog/typescript-could-not-find-a-declaration-file-for-module
      // https://stackoverflow.com/questions/53115665/cannot-find-name-require-in-angular-7typescript-3-1-3

      // *** Comment next 2 lines out during testing ***
      const{ firebaseConfig } = require('./firebase.config'); 
      const app = initializeApp(firebaseConfig);

      const db = getFirestore(app);

      //------------------------------------------ add data
      // try {
      //   const docRef = await addDoc(collection(db, "resources"), {
      //     category: "apps",
      //     name: "SoloLearn",
      //     description: "Mobile app and desktop learning platform. Includes web dev, Python, Java, C#, Angular.",
      //     website: "https://www.sololearn.com/",
      //     price: "0",
      //     imageUrl: "https://pbs.twimg.com/profile_images/1410707398021550084/MmGTT4dY_400x400.jpg",
      //     tag: "Learning",
      //     createdBy: "Janet",
      //     date: "2023"
      //     });
      //   console.log("Document written with ID: ", docRef.id);
      // } catch (e) {
      //   console.error("Error adding document: ", e);
      // }

      //------------------------------------------ read data
      const querySnapshot = await getDocs(collection(db, "resources"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });

  }

  isAuthenticated() {
    // Console error: Expression has changed after it was checked
    // https://blog.angular-university.io/angular-debugging/
    setTimeout(() => {
      if (this.authService.isAuthenticated && getAuth().currentUser?.uid === this.admin) { 
        this.navList = ['Home', 'Resources', 'Admin/Resources' ];
      } else if (this.authService.isAuthenticated) {
        this.navList = ['Home', 'Resources'];
      } else {
        this.navList = ['Home', 'Register', 'Login'];
      }
    });
    return this.authService.isAuthenticated;
  } 

  logout() {
    console.log('logging out');
    this.authService.logout();
  }

}
