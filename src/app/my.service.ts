// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class MyService {
counter: number=0
  constructor() { }

increment(){
this.counter+=1
alert(this.counter)
}
}

