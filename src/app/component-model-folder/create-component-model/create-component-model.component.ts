import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-component-model',
  templateUrl: './create-component-model.component.html',
  styleUrls: ['./create-component-model.component.scss']
})
export class CreateComponentModelComponent implements OnInit {

  @Input() numberOfPhotos: number;
  @Input() numberOfTextField: number;
  @Input() data: string;
  @Input() typeOfComponent: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  sendData() {
    const data = this.data.split('&#10;').join('');
    const numberOfPhotos = this.numberOfPhotos;
    const numberOfTextFields = this.numberOfTextField;
    const typeOfComponent = this.typeOfComponent;
    const componentModel = {
      data,
      numberOfPhotos,
      numberOfTextFields,
      typeOfComponent,
    };
    this.http.post<any>('http://localhost:3000/api/create_component_model', componentModel)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/component-models');
    });
  }

}
