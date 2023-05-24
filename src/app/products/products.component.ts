import { Component, OnInit } from '@angular/core';
import { ItemsInfo } from '../itemsInfo';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
MyItems:ItemsInfo[]=[]
  constructor(public router :Router,public auth:AuthService,public apiCaller:HttpClient) { }

  ngOnInit(): void {
  
    if(this.auth.AuthLoggedUn==false){
      this.router.navigate(['/login'])
    }
    this.getHttpApi()
    
    // fetch('https://itemss-api.onrender.com')
    //   .then(response => response.json())
    //   .then(json => {
    //     for (let i = 0; i < json.length; i++) {
    //       let c =new ItemsInfo();
    //       c.name=json[i].name ;
    //       c.category=json[i].category;
    //       c.price=json[i].price;
    //       c.color=json[i].color;
    //       c.available=json[i].available;
    //       c.image=json[i].images;
    //       c.id=json[i].id;
    //       this.MyItems.push(c)

    //     }
    //     // console.log(json)
    //   })
  }

  getHttpApi(){
this
.apiCaller
.get('https://itemss-api.onrender.com')
.subscribe((json:any)=>{

  for (let i = 0; i < json.length; i++) {
    let c =new ItemsInfo();
    c.name=json[i].name ;
    c.category=json[i].category;
    c.price=json[i].price;
    c.color=json[i].color;
    c.available=json[i].available;
    c.image=json[i].images;
    c.id=json[i].id;
    this.MyItems.push(c)
  }

  // console.log(json.length)

})
  }
productsKindSelected:string='all'

  productsRadioBtnChange(data:string){
this.productsKindSelected=data
// console.log(this.productsKindSelected)
  }

  getTotalProductsLength(){
    return this.MyItems.length
  }
  getTotalTv(){
    return this.MyItems.filter(prod=>prod.category==='tv').length
  }
  getTotalPhone(){
    return this.MyItems.filter(prod=>prod.category==='mobile').length
  }
  getTotalLaptop(){
    return this.MyItems.filter(prod=>prod.category==='laptop').length
  }
  getTotalWashmachine(){
    return this.MyItems.filter(prod=>prod.category==='washmachine').length
  }
  getTotalRef(){
    return this.MyItems.filter(prod=>prod.category==='refrigerator').length
  }


  
}
