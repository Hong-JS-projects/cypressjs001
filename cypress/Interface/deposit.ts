export interface Deposit {
  bankType?: number;
  bankName?: string;
  bankAccNumber?: number;
  amount: number;

  playerDeposit?(domain?: string): any;
  playerCancelDeposit?(domain?: string): any;
  operatorVerifyAndApproveDeposit?(): any;
  operatorRejectDeposit?(): any;
}
