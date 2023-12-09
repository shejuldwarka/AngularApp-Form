import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Codmind';

  data: string=" Hi all"

  count=0;

  IncreaseCount(){
this.count++;
  }
  fromChild(event: any){
    console.log('after output decorator',event)
    
// console.log(event.target.value);

  }
}

