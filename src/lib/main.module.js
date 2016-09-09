import './users/users.module.js';
import uiRouter from 'angular-ui-router';

var pioneer = angular.module('pioneer',  [uiRouter, 'users']);
pioneer.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('state1', {
      url: "/state1",
     // templateUrl: "partials/state1.html",
     /// controller: 'YourCtrl'
    })

    .state('state2', {
      url: "/state2",
     // templateUrl: "partials/state2.html",
      //controller: 'YourOtherCtrl'
    });

    
   // $urlRouterProvider.otherwise("/state1");
});