import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { AuthService, UserStatus } from './auth.service';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthMockService extends AuthService {
  private http = inject(HttpClient);
  router = inject(Router);
  isLoggedIn = signal(false);
  email = signal<string | null>(null);
  status = signal<UserStatus>('BLOCKED');
  isSubscribed = computed(() => this.status() === 'OK');
  remainingBalance = signal<Number>(0);
  token = signal<string | null>(null);
  firstName = signal<string | null>(null);
  lastName = signal<string | null>(null);
  userId = signal<number | null>(null);

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<any>('mock/users.json').pipe(
      tap((res) => console.log('JSON:', res)),

      map((res) => {
        const found = res.users.find((u: any) => u.email === email && u.password === password);
        return found;
      }),

      tap((user) => {
        if (user) {
          this.isLoggedIn.set(true);
          this.email.set(user.email);
          this.status.set(user.status);
          this.remainingBalance.set(user.balance);
          this.token.set('FAKE-TOKEN-12345');
          this.firstName.set(user.firstName);
          this.lastName.set(user.lastName);
          this.userId.set(user.id);
        } else {
          console.warn('Aucun utilisateur ne correspond aux identifiants.');
        }
      }),

      map((user) => !!user),

      catchError((err) => {
        console.error('Erreur de connexion: ', err);
        return of(false);
      }),
    );
  }

  logout() {
    this.isLoggedIn.set(false);
    this.email.set(null);
    this.status.set('BLOCKED');
    this.remainingBalance.set(0);
    this.token.set(null);
    this.firstName.set(null);
    this.lastName.set(null);
    this.userId.set(null);
    this.router.navigate(['/']);
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
    console.log('Mock Register: Création du compte pour', email);

    return of(true).pipe(
      delay(1000),
      tap(() => {
        this.isLoggedIn.set(true);
        this.email.set(email);
        this.firstName.set(firstName);
        this.lastName.set(lastName);
        this.userId.set(12345);
        this.status.set('OK');
        this.remainingBalance.set(0);
        this.token.set('FAKE-TOKEN-NEW-USER-' + Math.random());

        console.log('Mock Register: Données injectées dans les signals');
      }),

      map(() => true),
      catchError((err) => {
        console.error('Erreur Mock Register:', err);
        return of(false);
      }),
    );
  }

  toggleSubscription() {}
}
