import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  loginForm: FormGroup;
  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      //FormControl'lerin konfigürasyonunu obje olarak tanımlayıp
      // group metodu içerisine veriyoruz.İsimlere dikkat etmeliyiz.
      email: ['',[Validators.required, Validators.email]], //["default value",Validators...]
      password: ['', Validators.required], 
    });
  }

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
    }
    else{
      console.log("22222222222");
    }
  }
}
