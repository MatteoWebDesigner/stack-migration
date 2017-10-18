import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import vegetablesModule from './vegetables/module.js';
import fruitsModule from './fruits/module.js';
import meatsModule from './meats/module.js';

const APP_MODULE = 'app';

angular
  .module(APP_MODULE,[
      uiRouter,
      vegetablesModule,
      fruitsModule,
      meatsModule
  ])

export default APP_MODULE;