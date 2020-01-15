import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  mail: string;
  isAdmin = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const decoded = this.authService.decodeToken();
    this.mail = decoded.user.email;
    this.isAdmin = decoded.user.isAdmin;
  }
}
