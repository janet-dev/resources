import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  constructor(private router: Router) { }

  login(loginForm: FormGroup) {
    const auth = getAuth();
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    if (email && password) {
      console.log(this.loginForm.value);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          //const user = userCredential.user;
          alert('Logged in successfully');
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert('Invalid credentials');
        });
    }
  }

  passwordMatched: boolean = true;
  register(registerForm: FormGroup) {
    const auth = getAuth();
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
    
    if (email && password) {
      console.log(email, password);
      createUserWithEmailAndPassword(auth, email, password) 
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  }
}
