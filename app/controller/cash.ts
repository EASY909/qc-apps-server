import { Controller } from 'egg';
import { IResponseData } from '../types/index';
import { CashSort, ICashType } from '../types/cash';

export default class HomeController extends Controller {
  public async getCashType() {
    const { ctx } = this;
    const data = await ctx.service.cash.getCashType() as ICashType[];

    const result:IResponseData = {
      code: 0,
      message: 'success',
      data: {
        income: data?.filter(item => item.type === CashSort.income),
        pay: data?.filter(item => item.type === CashSort.pay),
        notincluded: data?.filter(item => item.type === CashSort.notincluded),
      },
    };
    ctx.body = result;
  }
}
