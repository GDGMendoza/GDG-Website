(function() {
  'use strict';

  angular
    .module('gdgPosts')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('posts', {
        url: '/posts',
        template: '<div ui-view></div>',
        abstract: true
      })
      
      .state('posts.create', {
        url: '/create',
        templateUrl: 'app/posts/form/post-form.html',
        controller: 'gdgPostCreateController',
        controllerAs: 'PostForm'
      })
      
      .state('posts.list', {
        url: '/list',
        templateUrl: 'app/posts/list/post-list.html',
        controller: 'gdgPostListController',
        controllerAs: 'PostList'
      })
      
      .state('posts.detail', {
        url: '/:id',
        templateUrl: 'app/posts/detail/post-detail.html',
        controller: 'gdgPostDetailController',
        controllerAs: 'PostDetail'
      })
      
      .state('posts.edit', {
        url: '/:id/edit',
        templateUrl: 'app/posts/form/post-form.html',
        controller: 'gdgPostEditController',
        controllerAs: 'PostForm'
      });
  }

})();
