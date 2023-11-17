import { UserInfo } from "./userInfo";
export interface PSLogin extends UserInfo {
  domain: string;
  button: string;

  loginWithValidData(): any;
  loginWithInValidData?(): any;
  loginWithEmptyData?(): any;
  loginWithNotCurrency?(): any;
}
