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
      if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        localStorage.setItem('auth', 'true');
      }
      this.router.navigate(['/admin']);
      return true;
    }
    return false;
  }

  logout() {
    this.isLoggedIn = false;
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.removeItem('auth');
    }
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      return localStorage.getItem('auth') === 'true';
    }
    return this.isLoggedIn;
  }
}
