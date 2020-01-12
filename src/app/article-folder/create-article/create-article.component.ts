import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  @Input() price: string;
  siteId: string;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const siteId = this.route.snapshot.params['siteId'];
    const name = form.value['name'];
    const price = form.value['price'];
    const description = form.value['description'];

    const article = {
      name,
      description,
      price,
      siteId
    };

    this.http.post<any>('http://localhost:3000/api/create-article', article)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('/sites/' + siteId + '/articles');
      });
  }

}
