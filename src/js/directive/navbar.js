;(function () {
  angular
    .module('directive.navbar', [])
    .directive('navbar', navbar)

  navbar.$inject = []

  function navbar () {
    var directive = {
      restrict: 'E',
      scope: true,
      controller: 'navbarController',
      controllerAs: 'navbarCtrl',
      transclude: true,
      templateUrl: 'templates/nav.tmpl'
    }
    return directive
  }
})()
