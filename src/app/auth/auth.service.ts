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

  login(loginForm: FormGroup) {
    const auth = getAuth();

    const email = loginForm.get('email')?.value;
    const password = loginForm.get('password')?.value;
    
    if (email && password) {
      
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          console.log('logged in: ', email, password);
          this.isAuthenticated = true;
          alert('\nYou are now logged in.\n\nLog out when finished.');
          this.router.navigate(['resources']);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          this.isAuthenticated = false;
        });
    }
  }

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
        });
    }
  }

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
