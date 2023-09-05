import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ResourcesComponent } from './resources/resources/resources.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'resources', component: ResourcesComponent },  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}