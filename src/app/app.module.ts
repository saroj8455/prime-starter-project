import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeModule } from './prime/prime.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent, NavbarComponent, ErrorPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
