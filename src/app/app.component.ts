import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Projet Annuel';

  constructor(private router: Router) { }

  disconnect() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  returnToHomepage() {
    this.router.navigateByUrl('/homepage');
  }

}
