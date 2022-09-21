import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async getCashType() {
    const { ctx } = this;
    ctx.body = await ctx.service.cash.getCashType();
  }
}
