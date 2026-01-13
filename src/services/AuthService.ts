import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { UserStatus } from '../models/UserResponse';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);
  private http = inject(HttpClient);

  private readonly API_URL = 'assets/data/mock-user.json';

  isLoggedIn = signal<boolean>(false);
  currentUser = signal<string | null>(null);
  remainingBalance = signal<Number>(0);
  status = signal<UserStatus>('BLOCKED');
  isSubscribed = computed(() => this.status() === 'OK');

  login(email: string, password: string): boolean {
    if (email === 'admin' && password === 'admin') {
      this.isLoggedIn.set(true);
      this.currentUser.set(email);
      this.remainingBalance.set(50);
      this.status.set('OK');
      return true;
    }
    if (email === 'user' && password === 'user') {
      this.isLoggedIn.set(true);
      this.currentUser.set(email);
      this.remainingBalance.set(0);
      this.status.set('BLOCKED');
      return true;
    }
    return false;
  }

  register(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      this.isLoggedIn.set(true);
      this.currentUser.set(username);
      this.remainingBalance.set(50);
      this.status.set('OK');
      return true;
    }
    if (username === 'user' && password === 'user') {
      this.isLoggedIn.set(true);
      this.currentUser.set(username);
      this.remainingBalance.set(0);
      this.status.set('BLOCKED');
      return true;
    }
    return false;
  }

  logout() {
    this.isLoggedIn.set(false);
    this.currentUser.set(null);
    this.remainingBalance.set(0);
    this.router.navigate(['/']);
    this.status.set('BLOCKED');
  }

  togleSubscription() {
    // this.isSubscribed.set(!this.isSubscribed());
  }
}
