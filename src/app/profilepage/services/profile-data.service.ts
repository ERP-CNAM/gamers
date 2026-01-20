import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProfileVm } from '../models/profile.vm';

@Injectable({ providedIn: 'root' })
export class ProfileDataService {
  getProfile(): Observable<ProfileVm> {
    const vm: ProfileVm = {
      firstName: 'Tin',
      lastName: 'Tin',
      email: 'tintin@phile.be',
      phone: '+33 8 26 88 07 00',
      street: '25 Avenue du Rhin',
      city: 'Strasbourg',
      postcode: '67100',
      country: 'France',
    };

    return of(vm);
  }
}
