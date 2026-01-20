import { SubscriptionListElement } from "../models/subscription-list.model";

export const SUBSCRIPTION_HISTORY: SubscriptionListElement[] = [
    {
        id: "Sub01",
        userId: "User01",
        contractCode: "C001",
        startDate: "12/11/2025",
        endDate: "12/12/2025",
        monthlyAmount: 15.0,
        promoCode: "",
        status: "CANCELLED"
    },
    {
        id: "Sub01",
        userId: "User01",
        contractCode: "C001",
        startDate: "31/12/2025",
        endDate: "31/01/2026",
        monthlyAmount: 15.0,
        promoCode: "",
        status: "ACTIVE"
    }
]