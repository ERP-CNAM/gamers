export interface UserResponse {
  id: string;
  balance: number;
  status: UserStatus;
  token?: string;
}

export type UserStatus = 'OK' | 'SUSPENDED' | 'BLOCKED' | 'DELETED';
