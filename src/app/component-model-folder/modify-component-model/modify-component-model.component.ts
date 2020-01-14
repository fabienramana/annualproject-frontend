import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify-component-model',
  templateUrl: './modify-component-model.component.html',
  styleUrls: ['./modify-component-model.component.scss']
})
export class ModifyComponentModelComponent implements OnInit {

  @Input() numberOfPhotos: number;
  @Input() numberOfTextField: number;
  @Input() data: string;
  @Input() typeOfComponent: string;
  @Input() id: string;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const idKey = 'id';
    const id = this.route.snapshot.params[idKey];
    this.id = id;
    this.http.get<any>('https://annualproject-back.herokuapp.com/api/component-model/' + id)
    .subscribe(res => {
      this.numberOfPhotos = res.numberOfPhotos;
      this.data = res.data;
      this.numberOfTextField = res.numberOfTextFields;
      this.typeOfComponent = res.typeOfComponent;
      console.log(this.numberOfPhotos);
      console.log(this.numberOfTextField);
      console.log(this.data);
    });
  }

  sendData() {
    const data = this.data.split('&#10;').join('');
    const numberOfPhotos = this.numberOfPhotos;
    const numberOfTextFields = this.numberOfTextField;
    const typeOfComponent = this.typeOfComponent;
    const componentModelToUpdate = {
      data,
      numberOfPhotos,
      numberOfTextFields,
      typeOfComponent
    };
    this.http.put<any>('https://annualproject-back.herokuapp.com/api/component-model/' + this.id, componentModelToUpdate)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('/component-models');
      });
  }

}
