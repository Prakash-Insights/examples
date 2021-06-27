import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  invalidUser: boolean = false;
  constructor(private formBuilder: FormBuilder, public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]

    })
  }

  get f() {
    return this.loginForm.controls;
  }
  submit(loginForm: FormGroup) {
    // console.log(!loginForm.invalid);
    if (loginForm.invalid) {
      return false;
    }
    this.authService.validUser(loginForm.value).subscribe(x => {
      console.log(x);
      if (x) {
        console.log('www');
        this.invalidUser = false;
        this.loginForm.reset();
        this.router.navigate(['./list']);
      } else {
        this.invalidUser = true;
      }
    });
  }
}
