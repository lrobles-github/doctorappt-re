// import modules
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs';

// import classes 
import { User } from './user';
import { Appointment } from './appointment';


@Injectable()
export class SchedulerService {

  appointments = [];
  appointment;
  appointmentObserver = new BehaviorSubject(this.appointment);

  constructor(private _http: Http) { }


// appointments
createNewAppointment(appointment) {
  console.log('==> client | scheduler.service | createNewAppointment()', appointment);
  this._http.post('http://localhost:1337/appointments', appointment)
    .subscribe(
      (response) => {
        console.log('===> client | scheduler.service | createNewAppointment() | response:', appointment);
      },
      (err) => {
        console.log(err);
      });
  }

getAppointments(callback) {
console.log('==> client | scheduler.service | getAppointments()');
this._http.get('http://localhost:1337/appointments')
.subscribe(
  (response) => {
    this.appointments = response.json();
    callback(this.appointments);
  },
  (err) => {
    console.log(err);
  });
}


deleteAppointment(_id: string) {
console.log('==> client | scheduler.service | deleteAppointment()');  
console.log(`http://localhost:1337/appointments/${ _id }`);    
  return this._http.delete(`http://localhost:1337/appointments/${ _id }`)
  .subscribe(
    (response) => {
      console.log('===> client | scheduler.service | deleteAppointment() | response:', response);
    },
    (err) => {
      console.log(err);
    });
}


}
