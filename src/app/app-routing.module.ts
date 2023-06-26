import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './routing_for_navbar/profile/profile.component';
import { AppComponent } from './app.component';
import { MissionComponent } from './routing_for_navbar/mission/mission.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './routing_for_navbar/history/history.component';
import { CellsComponent } from './routing_for_navbar/cells/cells.component';
import { AgenciesComponent } from './routing_for_navbar/agencies/agencies.component';
import { OrganisationComponent } from './routing_for_navbar/organisation/organisation.component';
import { WhoComponent } from './routing_for_navbar/who/who.component';
import { RolesComponent } from './routing_for_navbar/roles/roles.component';
import { AnnouncementsComponent } from './routing_for_navbar/notices/announcements/announcements.component';
import { RecruitmentsComponent } from './routing_for_navbar/notices/recruitments/recruitments.component';
import { CircularsComponent } from './routing_for_navbar/notices/circulars/circulars.component';
import { EventsComponent } from './routing_for_navbar/notices/events/events.component';
import { WhatsnewComponent } from './routing_for_navbar/media/whatsnew/whatsnew.component';
import { AwardsComponent } from './routing_for_navbar/media/awards/awards.component';
import { PhotossComponent } from './routing_for_navbar/media/photoss/photoss.component';
import { VideoComponent } from './routing_for_navbar/media/video/video.component';
import { PressComponent } from './routing_for_navbar/media/press/press.component';
import { SpeechesComponent } from './routing_for_navbar/media/speeches/speeches.component';
import { EbookComponent } from './routing_for_navbar/media/ebook/ebook.component';
const routes: Routes = [
{path:'profile',component:ProfileComponent},
{path:'mission',component:MissionComponent},
{ path : '', component :HomeComponent},
{path:'history',component:HistoryComponent},
{path:'cells',component:CellsComponent},
{path:'agencies',component:AgenciesComponent},
{path:'organisation',component:OrganisationComponent},
{path:'who',component:WhoComponent},
{path:'roles',component:RolesComponent},
{path:'announcements',component:AnnouncementsComponent},
{path:'recruitments',component:RecruitmentsComponent},
{path:'circulars',component:CircularsComponent},
{path:'events',component:EventsComponent},
{path:'whats',component:WhatsnewComponent},
{path:'awards',component:AwardsComponent},
{path:'photoss',component:PhotossComponent},
{path:'video',component:VideoComponent},
{path:'press',component:PressComponent},
{path:'speeches',component:SpeechesComponent},
{path:'ebook',component:EbookComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
