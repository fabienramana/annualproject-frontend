import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-article',
  templateUrl: './delete-article.component.html',
  styleUrls: ['./delete-article.component.scss']
})
export class DeleteArticleComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const siteIdKey = 'siteId';
    const siteId = this.route.snapshot.params[siteIdKey];
    const articleIdKey = 'articleId';
    const articleId = this.route.snapshot.params[articleIdKey];
    this.http.delete<any>('http://localhost:3000/api/article/' + articleId)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('sites/' + siteId + '/articles');
      });
  }

}
