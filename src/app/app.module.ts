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
import { RIAComponent } from './routing_for_navbar/actionsandrules/ria/ria.component';
import { OtrComponent } from './routing_for_navbar/actionsandrules/otr/otr.component';
import { Service1Component } from './routing_for_navbar/services/service1/service1.component';
import { Service2Component } from './routing_for_navbar/services/service2/service2.component';
import { PublicationsComponent } from './routing_for_navbar/documents/publications/publications.component';
import { ReportsComponent } from './routing_for_navbar/documents/reports/reports.component';
import { OfficeComponent } from './routing_for_navbar/documents/office/office.component';
import { PoliciesComponent } from './routing_for_navbar/documents/policies/policies.component';
import { BudgetsComponent } from './routing_for_navbar/documents/budgets/budgets.component';
import { CitizenComponent } from './routing_for_navbar/documents/citizen/citizen.component';
import { MajorComponent } from './routing_for_navbar/documents/major/major.component';
import { SubmitComponent } from './routing_for_navbar/Grievance/submit/submit.component';
import { GsComponent } from './routing_for_navbar/Grievance/gs/gs.component';
import { LoksabhaComponent } from './routing_for_navbar/parliaments/loksabha/loksabha.component';
import { RajyasabhaComponent } from './routing_for_navbar/parliaments/rajyasabha/rajyasabha.component';
import { ExternallinksComponent } from './routing_for_navbar/importantlinks/externallinks/externallinks.component';
import { InternallinksComponent } from './routing_for_navbar/importantlinks/internallinks/internallinks.component';
import { GeneralcontactComponent } from './routing_for_navbar/contactus/generalcontact/generalcontact.component';
import { SupportComponent } from './routing_for_navbar/contactus/support/support.component';
import { BottomnavbarComponent } from './bottomnavbar/bottomnavbar.component';
import { Aboutus1Component } from './routing_for_navbar/aboutus1/aboutus1.component';
import { AdmComponent } from './routing_for_navbar/adm/adm.component';

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
    PhotossComponent,
    RIAComponent,
    OtrComponent,
    Service1Component,
    Service2Component,
    PublicationsComponent,
    ReportsComponent,
    OfficeComponent,
    PoliciesComponent,
    BudgetsComponent,
    CitizenComponent,
    MajorComponent,
    SubmitComponent,
    GsComponent,
    LoksabhaComponent,
    RajyasabhaComponent,
    ExternallinksComponent,
    InternallinksComponent,
    GeneralcontactComponent,
    SupportComponent,
    BottomnavbarComponent,
    Aboutus1Component,
    AdmComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
