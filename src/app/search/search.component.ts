import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchValue:string=''
  constructor() { }

  ngOnInit(): void {
  }
  @Output() HandleClickSearch=new EventEmitter<string>()
// funcSearchValue(){
//   console.log(this.searchValue)
// }
searchValueFire(){
  this.HandleClickSearch.emit(this.searchValue)
}
}
