import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'recTask';
  myForm!: FormGroup;
  submitted = false;
  hide = true;
  reqN = false;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
    this.myForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(7), Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/)]],
      phoneNumber: ['', [Validators.pattern(/^[\d +]+$/)]],
      Email: ['', [Validators.email]],
      intrests: ['', [Validators.maxLength(100)]]
    })
  }

  changeReqN(){
    this.reqN = !this.reqN
  }

  get firstName(){
    return this.myForm.get('firstName');
  }
  get lastName(){
    return this.myForm.get('lastName');
  }
  get password(){
    return this.myForm.get('password');
  }
  get phoneNumber(){
    return this.myForm.get('phoneNumber');
  }
  get Email(){
    return this.myForm.get('Email');
  }
  get intrests(){
    return this.myForm.get('intrests');
  }
}
