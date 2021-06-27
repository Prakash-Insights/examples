import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.less']
})
export class ListUserComponent implements OnInit {
  allUsers: any[];

  constructor(private userService: UserService, private router: Router) {
    // debugger;
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(x => {
      // console.log('lists'); 
      this.allUsers = x
    });
  }
  deleteUser(id: number) {
    // this.allUsers = this.allUsers.filter(u => {
    //   console.log(u)
    //   return u['id'] !== id;
    // });
    this.userService.deleteUser(id).subscribe(x => {
      this.allUsers = x
    });
  }
  editUser(data: any) {
    this.userService.editUserData = data;
    this.router.navigate(['./edit']);
      // console.log(data);
  }
}
