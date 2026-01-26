import { Injectable, signal } from "@angular/core";
import { Observable, of, delay } from 'rxjs';
import { environment } from "../environments/environment";
import { SUBSCRIPTION_HISTORY } from "../app/data/subscriptions";
import { SubscriptionService } from "./subscription.service";
import { Subscription } from "../models/SubscriptionResponse";

@Injectable()
export class SubscriptionMockService extends SubscriptionService {
    private _mockDb: Subscription[] = [...SUBSCRIPTION_HISTORY];

    readonly history = signal<Subscription[]>(this._mockDb);

    getSubscriptionHistory(userId: string): Observable<Subscription[]> {
        return of(this.history()).pipe(delay(500)); 
    }

    createSubscription(payload: { 
        userId: string; 
        contractCode: string; 
        startDate: string; 
        monthlyAmount: number 
    }): Observable<boolean> {

        const newSub: Subscription = {
            id: Math.random().toString(36).substring(2, 9),
            ...payload,
            status: 'ACTIVE',
            promoCode: (payload as any).promoCode || null,
            endDate: null
        };

        this._mockDb = [newSub, ...this._mockDb];
        this.history.set(this._mockDb);

        return of(true).pipe(delay(800));
    }

    cancelSubscription(subscriptionId: string): Observable<boolean> {
        this._mockDb = this._mockDb.map(sub => 
            sub.id === subscriptionId 
            ? { ...sub, status: 'CANCELLED', endDate: new Date().toISOString().split('T')[0] } 
            : sub
        );

        this.history.set(this._mockDb);

        return of(true).pipe(delay(600));
    }

    override getCurrentSubscription(history: Subscription[]): Subscription | null {
        if (!history || history.length === 0) return null;
        return history.find(sub => sub.status === 'ACTIVE') ?? null;
    }
}

