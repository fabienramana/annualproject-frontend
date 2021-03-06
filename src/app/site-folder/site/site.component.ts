import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  @Input() name: string;
  @Input() activity: string;
  @Input() description: string;
  @Input() unitTime: string;
  @Input() isEnable: boolean;
  @Input() createdAt: Date;
  @Input() id: string;
  isAdmin: boolean;

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    const decoded = this.authService.decodeToken();
    this.isAdmin = decoded.user.isAdmin;
  }


  activateSite() {
    this.http.post<any>('https://annualproject-back.herokuapp.com/api/activate-site/' + this.id, {})
    .subscribe(res => {
      console.log(res);
      window.location.reload();
    });
  }

  deactivateSite() {
    this.http.post<any>('https://annualproject-back.herokuapp.com/api/deactivate-site/' + this.id, {})
    .subscribe(res => {
      console.log(res);
      window.location.reload();
    });
  }

}
