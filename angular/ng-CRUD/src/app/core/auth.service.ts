import { Injectable } from '@angular/core';
import { DummyUsers } from '../user/dummy-users.model';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: DummyUsers;
  constructor(private http: HttpClient) {
    this.users = new DummyUsers;
  }

  validUser(loginData: any): Observable<any> {
    const check = this.users.fakeUsers.find(x => {
      // console.log(x);
      return x.email === loginData.username && x.password === loginData.password
    });
    sessionStorage.setItem('token', check ? 'true': 'false');
    return of(check);
  }
}
