import { Route } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { LoginComponent } from "./app/auth/login/login.component";


export const routes: Route[] = [
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];