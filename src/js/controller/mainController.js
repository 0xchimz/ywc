;(function(){
  angular
    .module('controller.main', [])
    .controller('mainController', mainCtrl)
    .controller('homeController', homeCtrl)

    mainCtrl.$inject = []
    function mainCtrl (){
      var self = this
    }

    homeCtrl.$inject = []
    function homeCtrl (){
      var self = this
      this.msg = 'สวัสดี OUTHAING'
    }
})()
