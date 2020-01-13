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
  image: any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;
    }
  }


  onSubmit(form: NgForm) {
    console.log(form.value);
    const siteId = this.route.snapshot.params['siteId'];
    const name = form.value['name'];
    const price = form.value['price'];
    const description = form.value['description'];

    const formData = new FormData();
    formData.append('file', this.image);
    this.http.post<any>('http://localhost:3000/file', formData)
    .subscribe(res => {
      console.log(res);
      const imagePath = res.imageUrl;
      const article = {
        name,
        description,
        price,
        siteId,
        imagePath,
      };
      this.http.post<any>('http://localhost:3000/api/create-article', article)
      .subscribe(res2 => {
        console.log(res2);
        this.router.navigateByUrl('/sites/' + siteId + '/articles');
      });
    });
  }

}
