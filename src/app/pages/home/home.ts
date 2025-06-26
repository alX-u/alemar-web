import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //*Dependency injection
  _authService = inject(AuthService);
  _router = inject(Router);

  //*Signals
  isAuthenticated = signal(this._authService.isAuthenticated$);

  constructor() {
    this.isAuthenticated().subscribe((isAuth) => {
      if (isAuth) {
        this._router.navigate(['/dashboard']);
      }
    });
  }

  login() {
    this._authService.loginWithRedirect({
      appState: { target: '/dashboard' },
    });
  }

  logout() {
    this._authService.logout();
  }
}
