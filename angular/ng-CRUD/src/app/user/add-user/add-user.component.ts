import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.less']
})
export class AddUserComponent implements OnInit {
  addForm: FormGroup;
  invalidUser: boolean = false;
  title: string = 'Add User';
  btnCap: string = 'Add';
  constructor(private formBuilder: FormBuilder, public authService: AuthService, private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]

    })
  }

  get f() {
    return this.addForm.controls;
  }
  addData(addForm: FormGroup) {
    if (addForm.invalid) {
      return false;
    }
    this.userService.addUser(addForm.value).subscribe(x => {
      if(x) {
        this.router.navigate(['./list']);
      }
    });
  }

}
