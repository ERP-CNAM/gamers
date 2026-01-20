import { Component, inject, signal } from '@angular/core';
import { Card } from "../../components/card/card";
import { environment } from '../../environments/environment';
import { SubscriptionListElement } from '../models/subscription-list.model';
import { SubscriptionLoggable } from 'rxjs/internal/testing/SubscriptionLoggable';
import { SubscriptionService } from '../services/subscription.service';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribepage',
  imports: [Card],
  templateUrl: './subscribepage.html',
  styleUrl: './subscribepage.css',
})
export class Subscribepage {
  private subscriptionService = inject(SubscriptionService);
  private authService = inject(AuthService)
  private fb = inject(FormBuilder);
  subscriptionHistory: SubscriptionListElement[] = this.subscriptionService.getSubscriptionHistory() ?? [] 
  currentSubscription: SubscriptionListElement = this.subscriptionService.getCurrentSubscription(this.subscriptionHistory)
  remainingBalance = this.authService.remainingBalance;

  isFormOpen = signal(false);
  isSubmitting = signal(false);

  subscriptionForm = this.fb.nonNullable.group({
    userId: ['', [Validators.required]],
    contractCode: ['', [Validators.required]],
    startDate: ['', [Validators.required]],
    monthlyAmount: [0, [Validators.required, Validators.min(0)]],
    promoCode: ['']
  });

  openForm() {
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
      const formValue = this.subscriptionForm.getRawValue();
      const payload = {
        userId: formValue.userId,
        contractCode: formValue.contractCode,
        startDate: formValue.startDate,
        monthlyAmount: formValue.monthlyAmount,
        promoCode: formValue.promoCode || null
      };

      //await this.subscriptionService.createSubscription(payload);
      this.closeForm();
      // TODO: Refresh subscription data or show success message
    } catch (error) {
      console.error('Error creating subscription:', error);
      // TODO: Show error message to user
    } finally {
      this.isSubmitting.set(false);
    }
  }

}
