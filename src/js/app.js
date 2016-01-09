/* global angular */

;(function () {
  angular
    .module('ywc', [
      'services.route',
      'controller.main',
      'controller.navbar',
      'controller.campaign',
      'controller.create',
      'directive.navbar'
    ])
})()
