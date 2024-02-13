// Admin login/register

import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;

  constructor(private router: Router) { }

// ------------------------------ Login ------------------------------
  login(loginForm: FormGroup) {
    const auth = getAuth();
    const admin: string = 'BlM23QBsAOQWrW1QBgONrepiOdC3';

    const email = loginForm.get('email')?.value;
    const password = loginForm.get('password')?.value;
    
    if (email && password) {
      
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          this.isAuthenticated = true;
          if (auth.currentUser?.uid === admin) {
            alert('\nYou are now logged in as ADMIN.\n\nLog out when finished.');
            this.router.navigate(['admin/resources']);
          } else {
            alert('\nYou are now logged in.\n\nLog out when finished.');
            this.router.navigate(['resources']);
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          this.isAuthenticated = false;
          alert('\n\nIncorrect email/password');
          window.location.href="/login"; // refresh page
        });

    }
  }

// ------------------------------ Register ------------------------------
  passwordMatched: boolean = true;
  register(registerForm: FormGroup) {
    const auth = getAuth();
    const email = registerForm.get('email')?.value;
    const password = registerForm.get('password')?.value;
    
    if (email && password) {
      createUserWithEmailAndPassword(auth, email, password) 
        .then((userCredential) => {
          // Signed up 
          this.isAuthenticated = true;
          alert('\n\n\nThank you for registering.');
          this.router.navigate(['resources']);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          this.isAuthenticated = false;
          alert('\n\nIncorrect email/password format.\n\nPlease try again.');
          window.location.href="/register"; // refresh page
        });
    }
  }

// ------------------------------ Logout ------------------------------
  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.router.navigate(['home']);
        this.isAuthenticated = false;
      })
      .catch((error) => {
        // An error happened.
      });
  }

}
