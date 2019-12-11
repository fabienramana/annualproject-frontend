import { Component } from '@angular/core';

@Component({
  selector: 'app-compagny-create',
  templateUrl: './compagny-create.component.html',
  styleUrls: ['./compagny-create.component.scss'],
})
export class CompagnyCreateComponent {
  createCompagny(email, pwd) {
    alert(email.value + " " + pwd.value);
  }
}
