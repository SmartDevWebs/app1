import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public auth :AuthService,public router : Router) { }

  ngOnInit(): void {
    if(this.auth.AuthLoggedUn==false){
      this.router.navigate(['/login'])
    }
  }

}
