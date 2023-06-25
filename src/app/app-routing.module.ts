import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './routing_for_navbar/profile/profile.component';
import { AppComponent } from './app.component';
const routes: Routes = [
{path:'profile',component:ProfileComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
