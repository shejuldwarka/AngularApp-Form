import { Component, EventEmitter,Input, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'protractor';

type NewType = EventEmitter<string>;

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() name: string;
  @Input()
   clickCounts!: number;
@Output('update') fromChild: EventEmitter<string> = new EventEmitter<string>();
  
  res : string = "pass"

  constructor() { }

  ngOnInit() {
    console.log('Value coming from parent component', this.name);
    console.log('Ccount', this.clickCounts);
    
  }
sendToParent() {
this.fromChild.emit("pass");  // custom event with emit value....()
}
}
