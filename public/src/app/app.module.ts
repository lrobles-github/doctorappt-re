// import modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// import pipes
import { FilterPipe } from './filter.pipe';


// import components
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewapptComponent } from './newappt/newappt.component';


// import services
import { SessionService } from './session.service';
import { SchedulerService } from './scheduler.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DashboardComponent,
    NewapptComponent,
    FilterPipe
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SessionService, SchedulerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
