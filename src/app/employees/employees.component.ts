import { Component, OnInit } from '@angular/core';
import { employeeInfo } from '../employeeInfo';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
myEmployees:employeeInfo[]=[]
  constructor(public apiCaller:HttpClient,public auth :AuthService,public router :Router) { }

  ngOnInit(): void {
    if(this.auth.AuthLoggedUn==false){
      this.router.navigate(['/login'])
    }
  //  this.getapi1()
  this.getapi2()
  }
  getapi1(){
    fetch('https://testpublishapi.onrender.com')
    .then(response => response.json())
    .then(json =>{
         for (let i = 0; i < json.length; i++) {
          let c=new employeeInfo()
          c.fname=json[i].firstname;
          c.lname=json[i].lastname;
          c.pic=json[i].image;
          c.id=json[i].id;
          c.email=json[i].email;
          c.phone=json[i].phone;
          c.age=json[i].age;
          c.dep=json[i].departement;

          this.myEmployees.push(c)
          
         }
    })
}
getapi2(){
this
.apiCaller
.get('https://testpublishapi.onrender.com')
.subscribe((json:any)=>{
  for (let i = 0; i < json.length; i++) {
    let c=new employeeInfo()
          c.fname=json[i].firstname;
          c.lname=json[i].lastname;
          c.pic=json[i].image;
          c.id=json[i].id;
          c.email=json[i].email;
          c.phone=json[i].phone;
          c.age=json[i].age;
          c.dep=json[i].department;

          this.myEmployees.push(c)
    
   }
})
}
  
}
