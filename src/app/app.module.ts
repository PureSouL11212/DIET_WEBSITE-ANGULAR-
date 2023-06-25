import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartbarComponent } from './startbar/startbar.component';
import { LionComponent } from './lion/lion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './routing_for_navbar/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    StartbarComponent,
    LionComponent,
    NavbarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
