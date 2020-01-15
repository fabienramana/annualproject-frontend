import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modify-site',
  templateUrl: './modify-site.component.html',
  styleUrls: ['./modify-site.component.scss']
})
export class ModifySiteComponent implements OnInit {

  site: any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const idKey = 'id';
    const id = this.route.snapshot.params[idKey];
    this.http.get<any>('https://annualproject-back.herokuapp.com/api/site/' + id)
      .subscribe(res => {
        this.site = res;
        console.log(res);
      });
  }

  onSubmit(form: NgForm) {
    const idKey = 'id';
    const id = this.route.snapshot.params[idKey];
    this.http.put<any>('https://annualproject-back.herokuapp.com/api/site/' + id, form.value)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('/sites');
      });
  }


}
