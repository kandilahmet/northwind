import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validator,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService
  ) {}

  loginForm: FormGroup;

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      //FormControl'lerin konfigürasyonunu obje olarak tanımlayıp
      // group metodu içerisine veriyoruz.İsimlere dikkat etmeliyiz.
      email: ['', [Validators.required, Validators.email]], //["default value",Validators...]
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      // console.log(this.loginForm.value);
      let loginModel = Object.assign({}, this.loginForm.value);
      this.authService.login(loginModel).subscribe(
        (response) => {
          console.log(response)
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("expiration",response.data.expiration);
        },
        (errorResponse) => {
          this.toastrService.error(errorResponse.error,"Hata")
        }
      );
    } else {
      this.toastrService.error("Girdiğiniz Bilgileri Kontrol Edin","Hata")
    }
  }
}
