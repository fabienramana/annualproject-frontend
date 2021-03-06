import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-compagny-create',
  templateUrl: './compagny-create.component.html',
  styleUrls: ['./compagny-create.component.scss'],
})
export class CompagnyCreateComponent {
  constructor(private http: HttpClient, private router: Router) { }

  createCompagny(email, pwd, address, country, siren, activity) {
    const mail = email.value;
    const password = pwd.value;
    const addressValue = address.value;
    const countryValue = country.value;
    const sirenValue = siren.value;
    const activityValue = activity.value;
    const compagny = {
      mail,
      password,
      addressValue,
      countryValue,
      sirenValue,
      activityValue
    };
    this.http.post<any>('https://annualproject-back.herokuapp.com/api/create_company', compagny)
        .subscribe(res => {
          // Mettre sécurité si erreur
            console.log(res);
            localStorage.setItem ('token', res.token);
            this.router.navigateByUrl('/homepage');
          }
        );
  }
}
