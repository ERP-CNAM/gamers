import { Component, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { Card } from '../../components/card/card';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Adsbanner } from '../../components/adsbanner/adsbanner';
import { SubscriptionService } from '../../services/subscription.service';
import { Subscription } from '../../models/SubscriptionResponse';
import { firstValueFrom, switchMap } from 'rxjs';

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
  private refreshTrigger = signal(0);

  readonly userIdStr = computed(() => `${this.authService.userId() ?? ''}`);

  readonly subscriptionHistory = toSignal(
    toObservable(this.refreshTrigger).pipe(
      switchMap(() => this.subscriptionService.getSubscriptionHistory(this.userIdStr())),
    ),
    { initialValue: [] },
  );

  readonly currentSubscription = computed(() => {
    const history = this.subscriptionHistory();

    if (!history || history.length === 0) {
      return null;
    }

    return history.length > 0 ? this.subscriptionService.getCurrentSubscription(history) : null;
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
    monthlyAmount: [15.0],
    promoCode: [''],
    cardNumber: [''],
    cardHolder: [''],
    expiryDate: [''],
    cvv: [''],
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

      // Mise à jour des informations de paiement
      const paymentDetails = {
        iban: val.cardHolder,
      };

      const paymentSuccess = await firstValueFrom(
        this.subscriptionService.updatePaymentMethod(val.userId!, paymentDetails),
      );

      if (paymentSuccess) {
        const success = await firstValueFrom(this.subscriptionService.createSubscription(val));

        if (success) {
          this.authService.toggleSubscription();
          this.refreshTrigger.update((v) => v + 1);
          this.closeForm();
        } else {
          alert("Erreur lors de la création de l'abonnement.");
        }
      } else {
        alert('Erreur lors de la mise à jour des informations de paiement.');
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
        return;
      }
      this.authService.toggleSubscription();
      this.refreshTrigger.update((v) => v + 1);
    } catch (error) {
      console.error('Cancel Error:', error);
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
