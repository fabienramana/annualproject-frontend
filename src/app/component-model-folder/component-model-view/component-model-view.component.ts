import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-model-view',
  templateUrl: './component-model-view.component.html',
  styleUrls: ['./component-model-view.component.scss']
})
export class ComponentModelViewComponent implements OnInit {

  componentModels: any[];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/api/component-models')
    .subscribe(res => {
      this.componentModels = res;
      console.log(this.componentModels);
    });
  }

}
