import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  id: string;
  mail: string;
  isAdmin = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    const decoded = this.authService.decodeToken();
    this.mail = decoded.user.email;
    this.isAdmin = decoded.user.isAdmin;
    this.id = decoded.user._id;
  }
}
