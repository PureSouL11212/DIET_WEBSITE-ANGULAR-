import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartbarComponent } from './startbar/startbar.component';
import { LionComponent } from './lion/lion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './routing_for_navbar/profile/profile.component';
import { MissionComponent } from './routing_for_navbar/mission/mission.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { HomeComponent } from './home/home.component';
import { PhotoComponent } from './photo/photo.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PdgComponent } from './pdg/pdg.component';
import { ImageLayoutComponent } from './image-layout/image-layout.component';
import { FooterimageComponent } from './footerimage/footerimage.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    StartbarComponent,
    LionComponent,
    NavbarComponent,
    ProfileComponent,
    MissionComponent,
    ImageSliderComponent,
    HomeComponent,
    PhotoComponent,
    SlideshowComponent,
    PdgComponent,
    ImageLayoutComponent,
    FooterimageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
