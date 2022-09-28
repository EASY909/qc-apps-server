export type ICashType = {
  id:number;
  text: string,
  url: string,
  type:number
};

export enum CashSort {
  income = 1,
  pay = 2,
  notincluded = 3
}

export type ICashTypeResponse = {
  income: ICashType[],
  pay: ICashType[],
  notincluded:ICashType[],
};
