import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { UserService } from '../user.service';
import { AddUserComponent } from '../add-user/add-user.component';
import { FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.less']
})
export class EditUserComponent implements OnInit {
  editUserData: any;
  compRef: any;
  @ViewChild('editUsers', { read: ViewContainerRef }) entry: ViewContainerRef;
  constructor(
    private userService: UserService, 
    private factoryResolver: ComponentFactoryResolver,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.editUserData = this.userService.editUserData;
    this.entry.clear;
    const factory = this.factoryResolver.resolveComponentFactory(AddUserComponent);
    this.compRef = this.entry.createComponent(factory);
    this.compRef.instance.title = 'Edit User';
    this.compRef.instance.btnCap = 'Update';
    this.compRef.instance.addForm = this.formBuilder.group({
      firstName: [this.editUserData.firstName, Validators.required],
      lastName: [this.editUserData.lastName, Validators.required],
      email: [this.editUserData.email, Validators.required],
      password: ['', Validators.required]

    })
    console.log(this.compRef);
    console.log(this.editUserData.firstName);
  }

}
