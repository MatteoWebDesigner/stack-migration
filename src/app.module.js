import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import vegetablesModule from './vegetables/module.js';
import fruitsModule from './fruits/module.js';

const APP_MODULE = 'app';

angular
  .module(APP_MODULE,[
      uiRouter,
      vegetablesModule,
      fruitsModule
  ])

export default APP_MODULE;