import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

selectedRadioBtnValue:string='all'
  constructor() { }

  ngOnInit(): void {
  }
  @Input() all :number=0
  @Input() mobile :number=0
  @Input() tv:number=0
  @Input() laptop:number=0
  @Input() refrigerator:number=0
  @Input() washmachine:number=0

  @Output() filterRadioBtnSelectedChange = new EventEmitter<string>();

  onRadioBtnSelectedChange(){
    this.filterRadioBtnSelectedChange.emit(this.selectedRadioBtnValue)
    // console.log(this.selectedRadioBtnValue)
  }
}
