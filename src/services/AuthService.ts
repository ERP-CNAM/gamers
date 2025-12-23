import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);

  isLoggedIn = signal<boolean>(false);
  currentUser = signal<string | null>(null);
  remainingBalance = signal<Number>(0);
  isSubscribed = signal<boolean>(false);

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this.isLoggedIn.set(true);
      this.currentUser.set(username);
      this.remainingBalance.set(50);
      this.isSubscribed.set(true);
      return true;
    }
    if (username === 'user' && password === 'user') {
      this.isLoggedIn.set(true);
      this.currentUser.set(username);
      this.remainingBalance.set(0);
      this.isSubscribed.set(false);
      return true;
    }
    return false;
  }

  register(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      this.isLoggedIn.set(true);
      this.currentUser.set(username);
      this.remainingBalance.set(50);
      this.isSubscribed.set(true);
      return true;
    }
    if (username === 'user' && password === 'user') {
      this.isLoggedIn.set(true);
      this.currentUser.set(username);
      this.remainingBalance.set(0);
      this.isSubscribed.set(false);
      return true;
    }
    return false;
  }

  logout() {
    this.isLoggedIn.set(false);
    this.currentUser.set(null);
    this.remainingBalance.set(0);
    this.router.navigate(['/']);
    this.isSubscribed.set(false);
  }

  togleSubscription() {
    this.isSubscribed.set(!this.isSubscribed());
  }
}
