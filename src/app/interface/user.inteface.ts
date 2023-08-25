export interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  photo?: string;
  phone: number;
  dob: string;
  password: string;
  confirmPassword: string;
}
export interface AllUsers {
  status: string;
  results: number;
  data: Array<User>;
}
