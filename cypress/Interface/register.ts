export interface PSRegister {
  domain: string;
  username: string;
  password: string;
  confirmPassword: string;
  currency?: string;
  phone?: number;
  email?: string;
  RegisterWithValidData(): any;
  RegisterWithInValidData(): any;
  RegisterWithEmptyData(): any;
  RegisterWithNotCurrency?(): any;
}
