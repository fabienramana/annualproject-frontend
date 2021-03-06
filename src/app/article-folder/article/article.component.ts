import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() id: string;
  @Input() name: string;
  @Input() description: string;
  @Input() price: string;
  @Input() imageUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
