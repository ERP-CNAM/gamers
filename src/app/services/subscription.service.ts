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
}

