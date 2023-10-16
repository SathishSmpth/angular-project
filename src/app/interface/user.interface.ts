export interface User {
  email: string;
  username: string;
  phone: number;
  password?: string;
  confirmPassword?: string;
}

export interface AuthResponse {
  success: boolean;
  token: string;
}
