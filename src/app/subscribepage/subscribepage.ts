import { Component, inject } from '@angular/core';
import { Card } from "../../components/card/card";
import { environment } from '../../environments/environment';
import { SubscriptionListElement } from '../models/subscription-list.model';
import { SubscriptionLoggable } from 'rxjs/internal/testing/SubscriptionLoggable';
import { SubscriptionService } from '../services/subscription.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-subscribepage',
  imports: [Card],
  templateUrl: './subscribepage.html',
  styleUrl: './subscribepage.css',
})
export class Subscribepage {
  private subscriptionService = inject(SubscriptionService);
  private authService = inject(AuthService)
  subscriptionHistory: SubscriptionListElement[] = this.subscriptionService.getSubscriptionHistory() ?? [] 
  currentSubscription: SubscriptionListElement = this.subscriptionService.getCurrentSubscription(this.subscriptionHistory)
  remainingBalance = this.authService.remainingBalance;

}
