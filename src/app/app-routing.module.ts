import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ResourcesComponent } from './resources/resources/resources.component';
import { ResourceDetailComponent } from './resources/resource-detail/resource-detail.component';
import { AdminResourcesComponent } from './admin-resources/admin-resources.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'resources/detail', component: ResourceDetailComponent },
  { path: 'admin/resources', component: AdminResourcesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}