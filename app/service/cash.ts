import { Service } from 'egg';

export default class Cash extends Service {
  public async getCashType() {
    const { app } = this;
    const QUERY_STR = 'type, text, url';
    const sql = `select ${QUERY_STR} from cash_type`;
    try {
      return await app.mysql.query(sql);
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
