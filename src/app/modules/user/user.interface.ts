export interface User {
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  photo?: string;
  phone: number;
  dob: string;
  password?: string;
  confirmPassword?: string;
}

export interface AuthResponse {
  status: string;
  token: string;
}
