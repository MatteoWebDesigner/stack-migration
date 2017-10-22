import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import APP_MODULE from './app.module.js';
import AppShell from './appShell.js';
import Vegetables from './vegetables/index.js';
import Fruits from './fruits/index.js';

angular
  .module(APP_MODULE)
  .config(function ($locationProvider, $stateProvider) {
    "ngInject";
    
    $locationProvider.html5Mode({
      enabled : true,
      rewriteLinks : false
    });

    $stateProvider
      .state({
        name: 'app',
        abstract: true,
        component: AppShell
      })  
      .state({
        name: 'app.vegatables',
        url: '/',
        component: Vegetables
      })
      .state({
        name: 'app.fruits',
        url: '/fruits',
        component: Fruits
      })
  });

angular.bootstrap(document.getElementById(APP_MODULE), [APP_MODULE]);