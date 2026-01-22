import { computed, inject, Injectable, NgZone, signal } from '@angular/core';
import { AuthService, UserStatus } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap, catchError, of, switchMap } from 'rxjs';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class AuthApiService extends AuthService {
  private http = inject(HttpClient);

  isLoggedIn = signal(false);
  email = signal<string | null>(null);
  status = signal<UserStatus>('BLOCKED');
  isSubscribed = computed(() => this.status() === 'OK');
  remainingBalance = signal<number>(0);
  token = signal<string | null>(null);
  firstName = signal<string | null>(null);
  lastName = signal<string | null>(null);
  userId = signal<number | null>(null);
  router = inject(Router);
  private ngZone = inject(NgZone);

  constructor() {
    super();
    this.tryRestoreSession();
  }

  private tryRestoreSession() {
    const stored = localStorage.getItem('gamerz_session');
    if (stored) {
      try {
        const user = JSON.parse(stored);
        this.setSession(user, false);
      } catch {
        localStorage.removeItem('gamerz_session');
      }
    }
  }

  login(email: string, password: string): Observable<boolean> {
    const body = {
      clientName: environment.clientName,
      clientVersion: environment.clientVersion,
      serviceName: 'back',
      path: '/auth/login',
      debug: false,
      payload: {
        email,
        password,
      },
    };
    return this.http.post<any>(`${environment.apiUrl}`, body).pipe(
      map((response) => {
        if (response.success && response.payload) {
          const user = response.payload.user;
          user.token = response.payload.token;
          user.balance = user.balance || 0;
          return user;
        }
        return null;
      }),
      tap((user) => this.setSession(user)),
      map((user) => !!user),
      catchError((error) => {
        console.error('Erreur de connexion:', error);
        return of(false);
      }),
    );
  }

  register(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phone: string,
    address: string,
    city: string,
    postalCode: string,
    country: string,
    dateOfBirth: string,
  ): Observable<boolean> {
    const body = {
      clientName: environment.clientName,
      clientVersion: environment.clientVersion,
      serviceName: 'back',
      path: '/users',
      debug: false,
      payload: {
        firstName,
        lastName,
        email,
        password,
        phone,
        address,
        city,
        postalCode,
        country,
        dateOfBirth,
      },
    };
    return this.http.post<any>(`${environment.apiUrl}`, body).pipe(
      switchMap((response) => {
        if (response.success) {
          return this.login(email, password);
        }
        return of(false);
      }),
      catchError((error) => {
        console.error("Erreur d'inscription API:", error);
        return of(false);
      }),
    );
  }

  private setSession(user: any, save = true): void {
    if (user) {
      this.isLoggedIn.set(true);
      this.email.set(user.email);
      this.status.set(user.status);
      this.remainingBalance.set(user.balance);
      this.token.set(user.token);
      this.firstName.set(user.firstName);
      this.lastName.set(user.lastName);
      this.userId.set(user.id);

      if (save) {
        localStorage.setItem('gamerz_session', JSON.stringify(user));
      }
    }
  }

  logout() {
    localStorage.removeItem('gamerz_session');
    this.isLoggedIn.set(false);
    this.email.set(null);
    this.status.set('BLOCKED');
    this.remainingBalance.set(0);
    this.token.set(null);
    this.firstName.set(null);
    this.lastName.set(null);
    this.userId.set(null);
    this.ngZone.run(() => {
      this.router.navigate(['/']);
    });
  }

  toggleSubscription() {}
}
