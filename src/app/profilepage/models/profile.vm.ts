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
  // Compte
  firstName: string;
  lastName: string;
  email: string;
  addressLine: string;

  // Abonnement
  contractCode: string;
  subscriptionStatus: SubscriptionStatus;
  startDate: string;
  endDate?: string;
  monthlyPriceEur: number;
  promoCode?: string;

  // Financier
  balanceEur: number;
  financialStatus: FinancialStatus;
  invoices: ReadonlyArray<InvoiceVm>;
}
