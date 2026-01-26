import { Subscription } from "../models/SubscriptionResponse";
import { Observable } from 'rxjs';

export abstract class SubscriptionService {
    abstract getSubscriptionHistory(userId: string):  Observable<Subscription[]>;
    abstract getCurrentSubscription(history: Subscription[]): Subscription;
    abstract createSubscription(payload: { userId: string; contractCode: string; startDate: string; monthlyAmount: number }): Observable<boolean>;
    abstract cancelSubscription(subscriptionId: string): Observable<boolean>;
}