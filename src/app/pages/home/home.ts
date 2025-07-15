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
  _authService = inject(AuthService);
  _router = inject(Router);

  isAuthenticated = signal(this._authService.isAuthenticated$);

  constructor() {
    this._authService.user$.subscribe((user) => {
      if (user?.email === 'tesorerialemar@gmail.com') {
        this._router.navigate(['/dashboard']);
      } else if (user) {
        this._authService.logout({
          logoutParams: { returnTo: window.location.origin },
        });
        alert('Solo el usuario autorizado puede acceder al dashboard.');
      }
    });
  }

  login() {
    this._authService.loginWithRedirect();
  }

  logout() {
    this._authService.logout();
  }
}
