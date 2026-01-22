import { AsyncPipe, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProfileApiService } from '../../services/profile-api.service';
import { InvoiceVm, ProfileVm } from '../../models/profile.vm';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIf, NgFor, DecimalPipe, AsyncPipe],
  templateUrl: './profile.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  private readonly data = inject(ProfileApiService);
  readonly vm$ = this.data.getProfile();

  readonly trackByInvoiceRef = (_: number, i: InvoiceVm) => i.ref;
}
