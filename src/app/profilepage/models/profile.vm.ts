export type SubscriptionStatus = 'ACTIVE' | 'CANCELLED' | 'NONE';
export type InvoiceStatus = 'PAID' | 'PENDING' | 'FAILED';
export type FinancialStatus = 'OK' | 'KO';

export interface InvoiceVm {
  ref: string;
  issueDate: string;
  amountEur: number;
  status: InvoiceStatus;
}

export interface ProfileVm {
  firstName: string;
  lastName: string;
  email: string;

  phone?: string;
  street?: string;
  city?: string;
  postcode?: string;
  country?: string;
}
