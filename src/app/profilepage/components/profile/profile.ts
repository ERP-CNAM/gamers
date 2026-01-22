import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProfileApiService } from '../../services/profile-api.service';
import { ProfileVm } from '../../models/profile.vm';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './profile.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  private readonly data = inject(ProfileApiService);
  readonly vm$ = this.data.getProfile();
  authService = inject(AuthService);
}
