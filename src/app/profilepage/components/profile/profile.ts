import { AsyncPipe, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileDataService } from '../../services/profile-data.service';
import { InvoiceVm, ProfileVm } from '../../models/profile.vm';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIf, NgFor, DecimalPipe, AsyncPipe],
  templateUrl: './profile.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  private readonly data = inject(ProfileDataService);

  readonly vm$: Observable<ProfileVm> = this.data.getProfile();

  readonly trackByInvoiceRef = (_: number, i: InvoiceVm) => i.ref;
}