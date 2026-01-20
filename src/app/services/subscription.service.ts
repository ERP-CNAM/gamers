import { Injectable } from "@angular/core";
import { SubscriptionListElement } from "../models/subscription-list.model";
import { environment } from "../../environments/environment";
import { SUBSCRIPTION_HISTORY } from "../data/subscriptions";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
    getSubscriptionHistory(): SubscriptionListElement[] | undefined {

        if (environment.useIGDBApi == false) {
            return SUBSCRIPTION_HISTORY
        }

        return undefined
    }

    getCurrentSubscription(history: SubscriptionListElement[]): SubscriptionListElement {
        if (!history || history.length === 0) {
            throw new Error('No subscription history available');
        }

        return history.reduce((current, subscription) => {
            const currentDate = this.parseDate(current.startDate);
            const subscriptionDate = this.parseDate(subscription.startDate);
            
            return subscriptionDate > currentDate ? subscription : current;
        });
    } 

    private parseDate(dateString: string): Date {
        const [day, month, year] = dateString.split('/').map(Number);
        return new Date(year, month - 1, day);
    }
}

