import { Component, Input, OnInit } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
@Input () name :string=''
@Input () img:string=''
@Input () id:number=0
@Input () fname:string=''
@Input () lname:string=''
@Input () dep:string=''
@Input () email:string=''
@Input () phone:string=''
@Input () age:number=0




  constructor(public svc:MyService) { }

  ngOnInit(): void {
  }
  showCounter(){
    this.svc.increment()
  }

}
