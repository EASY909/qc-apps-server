import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/api/getCashType', controller.cash.getCashType);
};
