(function() {
  'use strict';

  angular
    .module('gdgEvents')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('events', {
        url: '/events',
        template: '<div ui-view></div>',
        abstract: true
      })
      
      .state('events.create', {
        url: '/create',
        templateUrl: 'app/events/form/event-form.html',
        controller: 'gdgEventCreateController',
        controllerAs: 'EventForm'
      })
      
      .state('events.list', {
        url: '/list',
        templateUrl: 'app/events/list/event-list.html',
        controller: 'gdgEventListController',
        controllerAs: 'EventList'
      })
      
      .state('events.detail', {
        url: '/:id',
        templateUrl: 'app/events/detail/event-detail.html',
        controller: 'gdgEventDetailController',
        controllerAs: 'EventDetail'
      })
      
      .state('events.edit', {
        url: '/:id/edit',
        templateUrl: 'app/events/form/event-form.html',
        controller: 'gdgEventEditController',
        controllerAs: 'EventForm'
      });
  }

})();
