import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from '../environments/environment';
import { BaseAPIResponse, Subscription } from '../models/SubscriptionResponse';
import { SubscriptionService } from './subscription.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionApiService extends SubscriptionService {
  private readonly http = inject(HttpClient);
  private readonly auth = inject(AuthService);

  readonly history = signal<Subscription[]>([]);
  readonly currentSubscription = computed(() => {
    const data = this.history();
    return data.length > 0 ? this.getCurrentSubscriptionLogic(data) : null;
  });

  getSubscriptionHistory(userId: string): Observable<Subscription[]> {
    const token = this.auth.token?.() ?? null;
    
    const body = {
      clientName: environment.clientName,
      clientVersion: environment.clientVersion,
      serviceName: 'back',
      path: '/subscriptions',
      debug: false,
      payload: {
        userId: userId,
      },
    };

    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'X-HTTP-Method-Override': 'GET',
    });

    return this.http
      .post<BaseAPIResponse<Subscription[]>>(environment.apiUrl, body, { headers })
      .pipe(
        map((res) => {
          if (!res.success || !res.payload) {
            console.warn('API Success False:', res.message);
            return [];
          }
          return res.payload;
        }),
        tap((data) => this.history.set(data)),
        catchError((err) => {
          console.error('Erreur API Subscriptions:', err);
          return of([]);
        })
      );
  }

  private getCurrentSubscriptionLogic(history: Subscription[]): Subscription {
    return history.reduce((latest, current) => {
      return new Date(current.startDate).getTime() > new Date(latest.startDate).getTime() 
        ? current 
        : latest;
    });
  }

  override getCurrentSubscription(history: Subscription[]): Subscription {
    return this.getCurrentSubscriptionLogic(history);
  }
}