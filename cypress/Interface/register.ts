import { UserInfo } from "./userInfo";

export interface PSRegister extends UserInfo {
  domain: string;

  RegisterWithValidData(): any;
  RegisterWithInValidData(): any;
  RegisterWithEmptyData(): any;
  RegisterWithNotCurrency?(): any;
}
