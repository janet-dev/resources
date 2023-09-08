import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { MaterialDesignModule } from './material-design/material-design.module';
import { ResourcesComponent } from './resources/resources/resources.component';
import { ResourceDetailComponent } from './resources/resource-detail/resource-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialDesignModule,
    BrowserAnimationsModule,
    HomeComponent,
    LoginComponent,
    ResourcesComponent,
    ResourceDetailComponent
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}