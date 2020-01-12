import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-delete-component-model',
  templateUrl: './delete-component-model.component.html',
  styleUrls: ['./delete-component-model.component.scss']
})
export class DeleteComponentModelComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const idKey = 'id';
    const id = this.route.snapshot.params[idKey];
    this.http.delete<any>('http://localhost:3000/api/component-model/' + id)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/component-models');
    });
  }

}
