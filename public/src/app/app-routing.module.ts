// import modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import components
import { LandingComponent } from './landing/landing.component';
import { NewapptComponent } from './newappt/newappt.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingComponent },
  { path: 'newappt', component: NewapptComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
