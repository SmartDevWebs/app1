import { Component, Input, OnInit } from '@angular/core';

import { MyService } from '../my.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() categ:string=''
  @Input() name:string=''
  @Input() price:number=0
  @Input() col:string=''
  @Input() avail:string=''
  @Input() img:string=''
  @Input() id:number=0

  word :string='iphone x'



  constructor(public svc :MyService){ }

  ngOnInit(): void {
  }
  nbrItems(){
    // alert("yala shopping")
    this.svc.increment();
    alert(this.svc.counter)
    
  }
}
