import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {

  articles: any[];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const siteId = this.route.snapshot.params['siteId'];
    this.http.get<any>('http://localhost:3000/api/site/' + siteId + '/articles')
      .subscribe(res => {
        this.articles = res;
        console.log(this.articles);
      });
  }

}
