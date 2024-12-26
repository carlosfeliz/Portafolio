import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'password') {
      this.isLoggedIn = true;
      localStorage.setItem('auth', 'true');
      this.router.navigate(['/admin']);
      return true;
    }
    return false;
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('auth');
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('auth') === 'true';
  }
}
