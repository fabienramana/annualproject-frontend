import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-site-view',
  templateUrl: './site-view.component.html',
  styleUrls: ['./site-view.component.scss']
})
export class SiteViewComponent implements OnInit {

  sites: any[];
  isAdmin: boolean;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.isAdmin = this.getIfIsAdmin();
    if (this.isAdmin) {
        this.http.get<any>('http://localhost:3000/api/sites')
      .subscribe(res => {
        this.sites = res;
        console.log(this.sites);
      });
    } else {
      const decoded = this.decodeToken();
      const companyId = decoded.user._id;
      console.log(companyId);
      this.http.get<any>('http://localhost:3000/api/company/' + companyId + '/sites')
        .subscribe(res => {
          console.log(res);
          this.sites = res;
        });
    }
  }

  getIfIsAdmin() {
    console.log(localStorage.getItem('isAdmin'));
    if (localStorage.getItem('isAdmin') === 'true') {
      return true;
    }
    return false;
  }

  decodeToken() {
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    return decoded;
  }

}
