import { Observable } from 'rxjs';
import { signal, computed, WritableSignal, Signal } from '@angular/core';

export type UserStatus = 'OK' | 'SUSPENDED' | 'BLOCKED' | 'DELETED';

export abstract class AuthService {
  abstract isLoggedIn: WritableSignal<boolean>;
  abstract email: WritableSignal<string | null>;
  abstract status: WritableSignal<UserStatus>;
  abstract isSubscribed: Signal<boolean>;
  abstract remainingBalance: WritableSignal<Number>;
  abstract firstName: WritableSignal<string | null>;
  abstract lastName: WritableSignal<string | null>;
  abstract token: WritableSignal<string | null>;
  abstract userId: WritableSignal<number | null>;

  abstract login(email: string, password: string): Observable<boolean>;
  abstract logout(): void;
  abstract register(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ): Observable<boolean>;
  abstract toggleSubscription(): void;
}
