// Admin login/register

import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  signInWithEmailAndPassword 
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
          console.log(email, password);
          this.isAuthenticated = true;
          console.log(this.isAuthenticated);
          this.router.navigate(['admin/resources']);
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
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          this.isAuthenticated = false;
        });
    }
  }
}
