import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.scss']
})
export class UpdateCompanyComponent implements OnInit {

  company: any;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const idKey = 'id';
    const id = this.route.snapshot.params[idKey];
    this.http.get<any>('https://annualproject-back.herokuapp.com/api/company/' + id)
      .subscribe(res => {
        this.company = res;
        console.log(res);
      });
  }

  onSubmit(form: NgForm) {
    const idKey = 'id';
    console.log(form.value);
    const id = this.route.snapshot.params[idKey];
    this.http.put<any>('https://annualproject-back.herokuapp.com/api/company/' + id, form.value)
      .subscribe(res => {
        console.log(res);
        localStorage.setItem ('token', res.token);
        this.router.navigateByUrl('/homepage');
      });
  }

}
