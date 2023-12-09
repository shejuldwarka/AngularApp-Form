import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {
  
  product: string = '';


  constructor() { }

  ngOnInit() {
  }
  getProductValue(val: any): void{
    console.log(val.target.value);
    this.product= val.target.value
  }
}
