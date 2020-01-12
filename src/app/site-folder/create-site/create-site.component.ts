import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-create-site',
  templateUrl: './create-site.component.html',
  styleUrls: ['./create-site.component.scss']
})
export class CreateSiteComponent implements OnInit {


  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const name = form.value['name'];
    const activity = form.value['activity'];
    const description = form.value['description'];
    const unitTime = form.value['unitTime'];
    const createdAt = new Date();
    const isEnable = false;
    const decoded = this.decodeToken();
    const companyId = decoded.user._id;

    const site = {
      name,
      activity,
      description,
      unitTime,
      createdAt,
      isEnable,
      companyId
    };

    this.http.post<any>('http://localhost:3000/api/create-site', site)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('/sites');
      });
  }

  decodeToken() {
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    return decoded;
  }

}
