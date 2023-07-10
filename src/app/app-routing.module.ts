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
import { GsComponent } from './routing_for_navbar/Grievance/gs/gs.component';
import { SubmitComponent } from './routing_for_navbar/Grievance/submit/submit.component';
import { LoksabhaComponent } from './routing_for_navbar/parliaments/loksabha/loksabha.component';
import { RajyasabhaComponent } from './routing_for_navbar/parliaments/rajyasabha/rajyasabha.component';
import { InternallinksComponent } from './routing_for_navbar/importantlinks/internallinks/internallinks.component';
import { ExternallinksComponent } from './routing_for_navbar/importantlinks/externallinks/externallinks.component';
import { GeneralcontactComponent } from './routing_for_navbar/contactus/generalcontact/generalcontact.component';
import { SupportComponent } from './routing_for_navbar/contactus/support/support.component';
import { Aboutus1Component } from './routing_for_navbar/aboutus1/aboutus1.component';
import { AdmComponent } from './routing_for_navbar/adm/adm.component';
import { Program6Component } from './routing_for_navbar/program6/program6.component';
import { ManpowersComponent } from './routing_for_navbar/manpowers/manpowers.component';

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
{path:'RIA',component:RIAComponent},
{path:'otr',component:OtrComponent},
{path:'service1',component:Service1Component},
{path:'service2',component:Service2Component},
{path:'publications',component:PublicationsComponent},
{path:'reports',component:ReportsComponent},
{path:'office',component:OfficeComponent},
{path:'policies',component:PoliciesComponent},
{path:'budgets',component:BudgetsComponent},
{path:'citizens',component:CitizenComponent},
{path:'major',component:MajorComponent},
{path:'gs',component:GsComponent},
{path:'submit',component:SubmitComponent},
{path:'loksabha',component:LoksabhaComponent},
{path:'rajyasabha',component:RajyasabhaComponent},
{path:'internallinks',component:InternallinksComponent},
{path:'externallinks',component:ExternallinksComponent},
{path:'generalc',component:GeneralcontactComponent},
{path:'supportc',component:SupportComponent},
{path:'aboutus1',component:Aboutus1Component},
{path:'adm',component:AdmComponent},
{path:'p6',component:Program6Component},
{path:'manpowers',component:ManpowersComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
