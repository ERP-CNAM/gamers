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
      addressLine: 'Chateau de Moulinsart, 64120 Moulinsart (Belgique)',

      contractCode: 'C001',
      subscriptionStatus: 'ACTIVE',
      startDate: '2026-06-01',
      monthlyPriceEur: 15,
      promoCode: 'B1M20',

      balanceEur: -15,
      financialStatus: 'KO',
      invoices: [
        { ref: 'Facture1', issueDate: '2026-06-30', amountEur: 7.5, status: 'PAID' },
        { ref: 'Facture3', issueDate: '2026-07-30', amountEur: 15, status: 'PENDING' },
      ],
    };

    return of(vm);
  }
}