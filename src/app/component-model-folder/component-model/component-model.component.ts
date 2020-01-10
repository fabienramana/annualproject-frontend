import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-model',
  templateUrl: './component-model.component.html',
  styleUrls: ['./component-model.component.scss']
})
export class ComponentModelComponent implements OnInit {

  @Input() numberOfPhotos: number;
  @Input() numberOfTextField: number;
  @Input() data: string;
  @Input() typeOfComponent: string;
  @Input() id: string;


  constructor() { }

  ngOnInit() {
  }

}
