import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';   
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';

import { routes } from './app.route';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './auth_Login_Signup/login/login.component';
import { SignUpComponent } from './auth_Login_Signup/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
