import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modify-article',
  templateUrl: './modify-article.component.html',
  styleUrls: ['./modify-article.component.scss']
})
export class ModifyArticleComponent implements OnInit {

  article: any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const articleIdKey = 'articleId';
    const articleId = this.route.snapshot.params[articleIdKey];
    this.http.get<any>('https://annualproject-back.herokuapp.com/api/article/' + articleId)
      .subscribe(res => {
        this.article = res;
      });
  }

  onSubmit(form: NgForm) {
    const siteIdKey = 'siteId';
    const siteId = this.route.snapshot.params[siteIdKey];
    const articleIdKey = 'articleId';
    const articleId = this.route.snapshot.params[articleIdKey];
    console.log(form.value);
    this.http.put<any>('https://annualproject-back.herokuapp.com/api/article/' + articleId, form.value)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('/sites/' + siteId + '/articles');
      });
  }

}
