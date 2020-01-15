import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-site-view',
  templateUrl: './site-view.component.html',
  styleUrls: ['./site-view.component.scss']
})
export class SiteViewComponent implements OnInit {

  sites: any[];
  isAdmin: boolean;

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    const decoded = this.authService.decodeToken();
    this.isAdmin = decoded.user.isAdmin;
    if (this.isAdmin) {
        this.http.get<any>('https://annualproject-back.herokuapp.com/api/sites')
      .subscribe(res => {
        this.sites = res;
        console.log(res);
      });
    } else {
      const companyId = decoded.user._id;
      this.http.get<any>('https://annualproject-back.herokuapp.com/api/company/' + companyId + '/sites')
        .subscribe(res => {
          console.log(res);
          this.sites = res;
        });
    }
  }
}
