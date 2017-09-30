// import modules
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs';

// import classes 
import { User } from './user';



@Injectable()
export class SessionService {

  currentuser = '';
  users = [];

  constructor(private _http: Http) { }

  createNewUser(user) {
    console.log('==> client | session.service | createNewUser()', user);    
    this._http.post('http://localhost:1337/users', user)
      .subscribe(
        (response) => {
          console.log('===> client | session.service | createNewUser() | response:', user);
          this.setSession(user.name);
        },
        (err) => {
          console.log(err);
        });
    }

  setSession(name) {
    console.log('==> client | session.service | setSession()');
    console.log('====>', name);          
    this._http.get(`http://localhost:1337/setSession/${ name }`)
      .subscribe(response => {
        console.log("==> client | session.service | response:", response);
      }, error => { console.log(error); 
      })
  }

  getSession(callback) {
    console.log('==> client | session.service | getSession()');
    this._http.get(`http://localhost:1337/getSession`)
      .subscribe(response => {
        callback(response.json());   
      }, error => { console.log(error); 
      })
  }

  clearSession() {
    console.log('==> client | session.service | clearSession()');        
    this._http.get('http://localhost:1337/deleteSession')
      .subscribe(response => {
        console.log("Logged out...");
      }, error => { console.log(error); 
      })
    
  }

}
