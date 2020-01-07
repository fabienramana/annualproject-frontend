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
    alert(email.value + ' ' + pwd.value);
    const mail = email.value;
    const password = pwd.value;
    const user = {
      mail,
      password
    };
    console.log(user);
    this.http.post<any>('http://localhost:3000/api/login_company', user)
        .subscribe(res => {
          // Mettre sécurité si erreur
            console.log(res);
            console.log(res.error);
            if (res.error === 'Error authenticating') {
              this.http.post<any>('http://localhost:3000/api/login_admin', user)
                .subscribe(res2 => {
                  console.log(res2);
                  if (res2.error === 'Error authenticating') {
                    console.log('Afficher un message d\'erreur');
                  }
                  if (res2.token !== undefined) {
                    localStorage.setItem('isAdmin', res2.isAdmin);
                    localStorage.setItem ('token', res2.token);
                    console.log(localStorage.getItem('token'));
                    this.router.navigateByUrl('/homepage');
                  }
                }
              );
            }
            if (res.token !== undefined) {
              localStorage.setItem('isAdmin', res.isAdmin);
              localStorage.setItem ('token', res.token);
              console.log(localStorage.getItem('token'));
              this.router.navigateByUrl('/homepage');
            }
          }
        );
  }
}
