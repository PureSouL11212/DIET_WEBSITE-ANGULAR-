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





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
