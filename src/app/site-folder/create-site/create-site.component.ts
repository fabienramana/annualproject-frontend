import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-create-site',
  templateUrl: './create-site.component.html',
  styleUrls: ['./create-site.component.scss']
})
export class CreateSiteComponent implements OnInit {


  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const activity = form.value['activity'];
    const description = form.value['description'];
    const unitTime = form.value['unitTime'];
    const createdAt = new Date();
    const isEnable = false;
    const decoded = this.authService.decodeToken();
    const companyId = decoded.user._id;

    const site = {
      name,
      activity,
      description,
      unitTime,
      createdAt,
      isEnable,
      companyId
    };

    this.http.post<any>('https://annualproject-back.herokuapp.com/api/create-site', site)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('/sites');
      });
  }


}
