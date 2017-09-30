// import modules
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// import pipe
import { FilterPipe } from '../filter.pipe';

// import classes and services
import { SchedulerService } from '../scheduler.service';
import { SessionService } from '../session.service';
import { Appointment } from '../appointment';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  appointments = [];
  currentuser;

  constructor(
    private _sessionService: SessionService, 
    private _schedulerService: SchedulerService, 
    private router: Router
  ) {
    this.getAppointments();
    this.getSession();
   }

   // appointments
   getAppointments() {
    console.log('==> client | dashboard.component | getAppointments())');    
    this._schedulerService.getAppointments((appointments) => {
      this.appointments = appointments;
    });
  }

  delete(_id) {
    console.log('==> client | dashboard.component | delete(poll)', _id);      
    this._schedulerService.deleteAppointment(_id);
    this.getAppointments();
    this.router.navigate(['/dashboard']);
  }

  goToNewAppointment() {
    console.log('==> client | dashboard.component | createNewAppointment()');      
    this.router.navigate(['/newappt']);
  }

  // session
  getSession() {
    console.log('==> client | dashboard.component | getSession())');        
    this._sessionService.getSession(currentuser => {
      this.currentuser = currentuser;
    })
  }

  logout() {
    console.log('==> client | dashboard.component | logout()');      
    this._sessionService.clearSession();
    this.router.navigate(['']);    
  }

  ngOnInit() {
  }

}
