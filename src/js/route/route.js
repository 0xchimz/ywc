;(function () {
  angular
    .module('services.route', ['ui.router'])
    .config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider']

  function config ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/home')
    $urlRouterProvider.otherwise('/404')
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'templates/home.tmpl',
        controller: 'homeController',
        controllerAs: 'homeCtrl'
      })
      .state('404', {
        url: '/404',
        templateUrl: 'templates/404.tmpl'
      })
      .state('campaign', {
        url: '/campaign/{campaign_id:int}',
        templateUrl: 'templates/campaign.tmpl',
        controller: 'campaignController',
        controllerAs: 'camCtrl'
      })
      .state('create', {
        url: '/create',
        templateUrl: 'templates/create.tmpl',
        controller: 'createController',
        controllerAs: 'createCtrl'
      })
  }
})()
