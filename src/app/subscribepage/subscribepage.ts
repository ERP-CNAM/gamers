import { Component, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Card } from '../../components/card/card';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Adsbanner } from '../../components/adsbanner/adsbanner';
import { SubscriptionService } from '../../services/subscription.service';
import { Subscription } from '../../models/SubscriptionResponse'

@Component({
  selector: 'app-subscribepage',
  standalone: true,
  imports: [Card, Adsbanner, ReactiveFormsModule],
  templateUrl: './subscribepage.html',
  styleUrl: './subscribepage.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Subscribepage {
  private subscriptionService = inject(SubscriptionService);
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);

  readonly userIdStr = computed(() => `${this.authService.userId() ?? ''}`);

  readonly subscriptionHistory = toSignal(
    this.subscriptionService.getSubscriptionHistory(this.userIdStr())
  );

  readonly currentSubscription = computed(() => {
    const history = this.subscriptionHistory();

    if (!history || history.length === 0) {
      return null
    }

    return history.length > 0 
      ? this.subscriptionService.getCurrentSubscription(history) 
      : null;
  });

  readonly remainingBalance = this.authService.remainingBalance;
  readonly isFormOpen = signal(false);
  readonly isSubmitting = signal(false);

  // Form setup
  readonly subscriptionForm = this.fb.nonNullable.group({
    userId: [this.userIdStr(), [Validators.required]],
    contractCode: ['', [Validators.required]],
    startDate: [new Date().toISOString().split('T')[0], [Validators.required]],
    monthlyAmount: [0, [Validators.required, Validators.min(0)]],
    promoCode: [''],
  });

  openForm() {
    this.subscriptionForm.patchValue({ userId: this.userIdStr() });
    this.isFormOpen.set(true);
  }

  closeForm() {
    this.isFormOpen.set(false);
    this.subscriptionForm.reset();
  }

  async onSubmit() {
    if (this.subscriptionForm.invalid) {
      this.subscriptionForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    try {
      const payload = this.subscriptionForm.getRawValue();
      // await this.subscriptionService.createSubscription(payload);
      this.closeForm();
    } catch (error) {
      console.error('Error creating subscription:', error);
    } finally {
      this.isSubmitting.set(false);
    }
  }
}