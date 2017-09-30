// import modules
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

// import services
import { SessionService } from '../session.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  user = {
    name:''
  }

  constructor(
    private _sessionService: SessionService, 
    private router: Router
  ) { }

  onSubmit() {
    console.log('===> client | LandingComponent | onSubmit()');
    console.log('===>', this.user);
    this._sessionService.createNewUser(this.user);
    this.user = {
      name:''
    };
    this.router.navigateByUrl("dashboard");
  }

    ngOnInit() {
    }

}
