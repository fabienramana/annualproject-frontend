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
    console.log(id);
    this.http.get<any>('http://localhost:3000/api/site/' + id)
      .subscribe(res => {
        this.site = res;
        console.log(this.site);
      });
  }

  onSubmit(form: NgForm) {
    const idKey = 'id';
    const id = this.route.snapshot.params[idKey];
    console.log(id);
    console.log(form.value);
    this.http.put<any>('http://localhost:3000/api/site/' + id, form.value)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('/sites');
      });
  }


}
