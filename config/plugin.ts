import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
};

export default plugin;
