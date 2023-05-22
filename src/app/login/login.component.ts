import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username : string=''
password : string=''
  constructor(public router :Router,public auth:AuthService) { }

  ngOnInit(): void {
  }
  golog(){
this.auth.AuthLoggedUn=true ;
this.router.navigate(['/home']) }
  goback(){
this.router.navigate(['/'])  }
}
