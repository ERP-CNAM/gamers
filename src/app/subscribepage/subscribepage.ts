import { Component, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Card } from '../../components/card/card';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Adsbanner } from '../../components/adsbanner/adsbanner';
import { SubscriptionService } from '../../services/subscription.service';
import { Subscription } from '../../models/SubscriptionResponse'
import { firstValueFrom } from 'rxjs';

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
  authService = inject(AuthService);
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

  readonly canSubscribe = computed(() => {
    const current = this.currentSubscription();
    return !current || current.status === 'CANCELLED';
  });

  readonly subscriptionForm = this.fb.nonNullable.group({
    userId: [this.userIdStr()], 
    contractCode: ['C003'],
    startDate: [new Date().toISOString().split('T')[0]], 
    monthlyAmount: [15.00], 
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
    if (!this.canSubscribe()) return;

    this.isSubmitting.set(true);
    try {
      const val = this.subscriptionForm.getRawValue();
      const success = await firstValueFrom(this.subscriptionService.createSubscription(val));
      
      if (success) {
        this.closeForm();
      } else {
        alert("Erreur lors de la création de l'abonnement.");
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      this.isSubmitting.set(false);
    }
  }

  async onCancelSubscription() {
    const current = this.currentSubscription();
    if (!current?.id) return;

    const confirmed = window.confirm('Êtes-vous sûr de vouloir résilier votre abonnement ?');
    if (!confirmed) return;

    this.isSubmitting.set(true);
    try {
      const success = await firstValueFrom(this.subscriptionService.cancelSubscription(current.id));
      if (!success) {
        alert('La résiliation a échoué. Veuillez contacter le support.');
      }
    } catch (error) {
      console.error('Cancel Error:', error);
    } finally {
      this.isSubmitting.set(false);
    }
  }
}