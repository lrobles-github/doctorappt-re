// import components
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

// import classes and services
import { SessionService } from '../session.service';
import { SchedulerService } from '../scheduler.service';


@Component({
  selector: 'app-newappt',
  templateUrl: './newappt.component.html',
  styleUrls: ['./newappt.component.css']
})
export class NewapptComponent implements OnInit {

  appointment = {
    date: '',
    time: '',
    patient: '',
    complaint: ''
  }
  
  today: Number = Date.now();

  constructor(
    private _sessionService: SessionService,
    private _schedulerService: SchedulerService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    
        console.log('===> client | NewapptComponent | onSubmit()');
        console.log('===>', this.appointment);
        this._schedulerService.createNewAppointment(this.appointment);
        
        this.appointment = {
          date: '',
          time: '',
          patient: '',
          complaint: ''
        };
    
        this._router.navigate(['dashboard']);
    
      }  


  cancel() {
    console.log('==> client | newappt.component | cancel()');      
    this._router.navigate(['dashboard']);    
  }

}
