import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ResourcesComponent } from './resources/resources/resources.component';
import { ResourceDetailComponent } from './resources/resource-detail/resource-detail.component';
import { AdminResourcesComponent } from './admin-resources/admin-resources.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'resources/detail', component: ResourceDetailComponent },
  { path: 'admin/resources', component: AdminResourcesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}