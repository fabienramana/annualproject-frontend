import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compagny-login',
  templateUrl: './compagny-login.component.html',
  styleUrls: ['./compagny-login.component.scss'],
})
export class CompagnyLoginComponent {
  constructor(private http: HttpClient, private router: Router) { }

  login(email, pwd) {
    const mail = email.value;
    const password = pwd.value;
    const user = {
      mail,
      password
    };
    this.http.post<any>('https://annualproject-back.herokuapp.com/api/login_company', user)
        .subscribe(res => {
          console.log(res);
            if (res.error === 'Error authenticating') {
              this.http.post<any>('https://annualproject-back.herokuapp.com/api/login_admin', user)
                .subscribe(res2 => {
                  console.log(res2);
                  if (res2.error === 'Error authenticating') {
                    console.log('Afficher un message d\'erreur');
                  }
                  if (res2.token !== undefined) {
                    localStorage.setItem ('token', res2.token);
                    this.router.navigateByUrl('/homepage');
                  }
                }
              );
            }
            if (res.token !== undefined) {
              localStorage.setItem ('token', res.token);
              this.router.navigateByUrl('/homepage');
            }
        }
      );
  }
}
