import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disconnect',
  templateUrl: './disconnect.component.html',
  styleUrls: ['./disconnect.component.scss']
})
export class DisconnectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
