import { Component, } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent {
  user$ = null;

  constructor(
    private router: Router,
  ) { }

  onLogout() {
  }
}
