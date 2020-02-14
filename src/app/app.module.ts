import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { TopHeaderComponent } from './pages/top-header/top-header.component';
import { Router } from "@angular/router";
import { FooterComponent } from './pages/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactPageComponent,
    TopHeaderComponent,
    FooterComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
