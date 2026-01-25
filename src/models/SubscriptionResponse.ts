// models/subscription.model.ts

export interface BaseAPIResponse<T> {
  success: boolean;
  message: string;
  payload: T;
}

export interface Subscription {
  id: string;
  userId: string;
  contractCode: string;
  startDate: string;
  endDate: string | null;
  monthlyAmount: number;
  promoCode: string | null;
  status: 'ACTIVE' | 'CANCELLED' | 'PENDING_CANCEL';
}

export interface SubscriptionListElementOLD {
    id: string;
    userId: string;
    contractCode: string;
    startDate: string;
    endDate: string;
    monthlyAmount: number;
    promoCode: string;
    status: string;
}