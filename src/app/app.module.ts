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
import { HistoryComponent } from './routing_for_navbar/history/history.component';
import { CellsComponent } from './routing_for_navbar/cells/cells.component';
import { RolesComponent } from './routing_for_navbar/roles/roles.component';
import { AgenciesComponent } from './routing_for_navbar/agencies/agencies.component';
import { OrganisationComponent } from './routing_for_navbar/organisation/organisation.component';
import { WhoComponent } from './routing_for_navbar/who/who.component';
import { AnnouncementsComponent } from './routing_for_navbar/notices/announcements/announcements.component';
import { RecruitmentsComponent } from './routing_for_navbar/notices/recruitments/recruitments.component';
import { CircularsComponent } from './routing_for_navbar/notices/circulars/circulars.component';
import { EventsComponent } from './routing_for_navbar/notices/events/events.component';
import { WhatsnewComponent } from './routing_for_navbar/media/whatsnew/whatsnew.component';
import { AwardsComponent } from './routing_for_navbar/media/awards/awards.component';
import { VideoComponent } from './routing_for_navbar/media/video/video.component';
import { PressComponent } from './routing_for_navbar/media/press/press.component';
import { SpeechesComponent } from './routing_for_navbar/media/speeches/speeches.component';
import { EbookComponent } from './routing_for_navbar/media/ebook/ebook.component';
import { PhotossComponent } from './routing_for_navbar/media/photoss/photoss.component';

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
    FooterComponent,
    HistoryComponent,
    CellsComponent,
    RolesComponent,
    AgenciesComponent,
    OrganisationComponent,
    WhoComponent,
    AnnouncementsComponent,
    RecruitmentsComponent,
    CircularsComponent,
    EventsComponent,
    WhatsnewComponent,
    AwardsComponent,
    VideoComponent,
    PressComponent,
    SpeechesComponent,
    EbookComponent,
    PhotossComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
