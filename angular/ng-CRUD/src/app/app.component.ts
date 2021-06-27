import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log(this.router.url);
  }
  title = 'ngCRUD';
  // isLoginUrl: boolean = true;
  constructor(private router: Router) {
    console.log(this.router.url);
  }

}
