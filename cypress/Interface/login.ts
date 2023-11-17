export interface PSLogin {
  domain: string;
  username: string;
  password: string;
  button:string;

  loginWithValidData(): any;
  loginWithInValidData?(): any;
  loginWithEmptyData?(): any;
  loginWithNotCurrency?(): any;
}
