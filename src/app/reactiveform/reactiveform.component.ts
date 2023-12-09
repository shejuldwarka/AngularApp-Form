import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  myReactiveForm: FormGroup;
  isFormSubmitted: boolean =false;
  constructor() {
    this.createForm();
   }

  ngOnInit() {
  }
createForm(){
  this.myReactiveForm= new FormGroup({
    'userDetail': new FormGroup({
      'username': new FormControl('dwarka', Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
  
    }),
    'course': new FormControl('Angular'),
    'skills': new FormArray([
      new FormControl(null)
    ])
  })
}

Submit(){
  this.isFormSubmitted= true;
  console.log(this.myReactiveForm);
  
}
}
