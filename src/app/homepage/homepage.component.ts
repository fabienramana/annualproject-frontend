import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  mail: string;
  isAdmin = false;

  constructor() { }

  ngOnInit() {
    const decoded = this.decodeToken();
    this.mail = decoded.user.email;
    this.isAdmin = this.getIfIsAdmin();
  }

  decodeToken() {
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    return decoded;
  }

  getIfIsAdmin() {
    console.log(localStorage.getItem('isAdmin'));
    if (localStorage.getItem('isAdmin') === 'true') {
      return true;
    }
    return false;
  }

}
