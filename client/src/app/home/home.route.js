(function() {
  'use strict';

  angular
    .module('gdgHome')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'gdgHomeController',
        controllerAs: 'Home'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
