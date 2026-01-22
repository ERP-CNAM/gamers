export interface ApiEnvelope<T> {
  success: boolean;
  message?: string;
  payload?: T;
}

export interface ApiUserDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  country?: string;
  dateOfBirth?: string;
  status?: 'OK' | 'BLOCKED' | string;
  createdAt?: string;
  updatedAt?: string;
}
