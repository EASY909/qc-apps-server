import { Service } from 'egg';

export default class Cash extends Service {
  public async getCashType() {
    const { app } = this;
    const QUERY_STR = 'id, text, url';
    const sql = `select ${QUERY_STR} from cash_type`;
    try {
      const result = await app.mysql.query(sql);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
