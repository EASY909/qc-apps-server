// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCash from '../../../app/controller/cash';

declare module 'egg' {
  interface IController {
    cash: ExportCash;
  }
}
