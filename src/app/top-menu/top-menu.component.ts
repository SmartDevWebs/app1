import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MyService } from '../my.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'topMenu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(public svc:MyService,public router : Router,public auth : AuthService) { }

  ngOnInit(): void {
  }
showLastCounter(){
  alert("your cart contains : "+this.svc.counter+" items")
}
logout(){
  this.auth.AuthLoggedUn=false
  this.router.navigate(['/login'])
}
}
