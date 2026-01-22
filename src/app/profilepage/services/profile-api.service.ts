import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map, catchError, of, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiEnvelope, ApiUserDto } from '../models/profile-api.types';
import { ProfileVm } from '../models/profile.vm';
import { AuthService } from '../../../services/auth.service';

@Injectable({ providedIn: 'root' })
export class ProfileApiService {
  private readonly http = inject(HttpClient);
  private readonly auth = inject(AuthService);

  getProfile(): Observable<ProfileVm> {
    const userId = this.auth.userId?.() ?? null;
    if (!userId) {
      return throwError(() => new Error('UserId manquant (non connecté)'));
    }

    const token = this.auth.token?.() ?? null;
    if (!token) return throwError(() => new Error('Token manquant'));

    const body = {
      clientName: environment.clientName,
      clientVersion: environment.clientVersion,
      serviceName: 'back',
      path: `/users/${userId}`,
      debug: false,
      payload: {
        userId: userId,
      },
    };

    const headers = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'X-HTTP-Method-Override': 'GET',
    });

    return this.http
      .post<ApiEnvelope<ApiUserDto>>(environment.apiUrl, body, {
        headers
      })
      .pipe(
        map((res) => {
          if (!res.success || !res.payload) {
            throw new Error(res.message ?? 'Erreur API: réponse invalide');
          }
          return this.mapUserToVm(res.payload);
        }),
        catchError((err) => {
          console.error('Erreur API profile:', err);
          return of(this.fallbackVm());
        })
    );
  }

  private mapUserToVm(u: ApiUserDto): ProfileVm {
    return {
      firstName: u.firstName,
      lastName: u.lastName,
      email: u.email,

      phone: u.phone ?? '',
      street: u.address ?? '',
      city: u.city ?? '',
      postcode: u.postalCode ?? '',
      country: u.country ?? '',
    };
  }

  private fallbackVm(): ProfileVm {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      street: '',
      city: '',
      postcode: '',
      country: '',
    };
  }
}
