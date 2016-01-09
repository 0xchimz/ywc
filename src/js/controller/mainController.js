;(function(){
  angular
    .module('controller.main', [])
    .controller('mainController', mainCtrl)
    .controller('homeController', homeCtrl)

    mainCtrl.$inject = ['$scope']
    function mainCtrl ($scope){
      var self = this
      $scope.user = {
          name : "worapon Olanwanitchakul",
          gender : "m",
          age : 20,
          picture : "http://www.deyoungmedia.com/wp-content/uploads/2014/07/steve-jobs-morreu-brasil-153927.jpg",
          reports : [
            {
              comment : "shit",
              user : 2,
            }
          ],
          comments : [
            {
              comment : "good guy",
              user : 3,
            }
          ],
          campaign_list : [
            {
              campaign_id : 1,
            }
          ]

        }
    }

    homeCtrl.$inject = []
    function homeCtrl (){
      var self = this
      this.msg = 'สวัสดี OUTHAING'

    }
})()
