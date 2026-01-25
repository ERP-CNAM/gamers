import { Injectable } from "@angular/core";
import { Observable, of, delay } from 'rxjs';
import { environment } from "../environments/environment";
import { SUBSCRIPTION_HISTORY } from "../app/data/subscriptions";
import { SubscriptionService } from "./subscription.service";
import { Subscription } from "../models/SubscriptionResponse";

@Injectable()
export class SubscriptionMockService extends SubscriptionService {
    getSubscriptionHistory(userId: string): Observable<Subscription[]> {

        const data = !environment.useIGDBApi ? SUBSCRIPTION_HISTORY : [];

        return of(data).pipe (
            delay(500)
        )
    }

    getCurrentSubscription(history: Subscription[]): Subscription {
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

