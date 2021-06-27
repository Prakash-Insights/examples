import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DummyUsers } from './dummy-users.model';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: DummyUsers;
  fkUsers: any[];
  editUserData: any;
  constructor(private http: HttpClient) {
    this.users = new DummyUsers;
    this.fkUsers = this.users.fakeUsers;
  }
  getAllUsers(): Observable<any> {
    return of(this.fkUsers);
  }
  deleteUser(id: number): Observable<any>{
    this.fkUsers = this.fkUsers.filter(u => u['id'] !== id);
    return of(this.fkUsers);
  }
  addUser(data: any): Observable<any> {
    let count = 0;
    this.fkUsers.map(() => count++);
    data.id = count + 1;
    console.log(data);
    this.fkUsers.push (data);
    return of(true);
  }
}
