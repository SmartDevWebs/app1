import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth:AuthService,public router : Router) { }

  ngOnInit(): void {
    if(this.auth.AuthLoggedUn==false){
      this.router.navigate(['/login'])
    }
  }

}
