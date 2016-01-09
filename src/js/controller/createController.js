;(function(){
  angular
    .module('controller.create', ['textAngular', 'datePicker', 'angularMoment'])
    .controller('createController', createCtrl)

    createCtrl.$inject = []
    function createCtrl (){
      var self = this
      self.selectedDate = new Date();
    }
})()
