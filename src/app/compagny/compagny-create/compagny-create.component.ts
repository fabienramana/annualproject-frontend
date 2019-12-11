import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-compagny-create',
  templateUrl: './compagny-create.component.html',
  styleUrls: ['./compagny-create.component.scss'],
})
export class CompagnyCreateComponent {
  constructor(private http: HttpClient) { }

  createCompagny(email, pwd, address, country, siren, activity) {
    alert(email.value + ' ' + pwd.value + ' ' + address.value + ' ' + country.value + ' ' + siren.value + ' ' + activity.value);
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
    console.log(compagny);
    this.http.post('http://localhost:3000/api/create_compagny', compagny)
        .subscribe(res => console.log(res));
  }
}
