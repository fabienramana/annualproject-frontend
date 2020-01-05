import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  mail: string;

  constructor() { }

  ngOnInit() {
    let decoded = this.decodeToken();
    this.mail = decoded.company.email;
  }

  decodeToken(){
    let token = localStorage.getItem('token');
    let decoded = jwt_decode(token);
    return decoded;
  }

}
