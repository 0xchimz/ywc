;(function(){
  angular
    .module('controller.campaign', ['angularMoment'])
    .controller('campaignController', campaignCtrl)

    campaignCtrl.$inject = ['$scope', '$stateParams']
    function campaignCtrl ($scope, $stateParams){
      var self = this;
      self.inTrip = false
      self.campaign = $scope.campaignList[$stateParams.campaign_id]
      self.isInTrip = function(){
        if(!self.inTrip)
          for(var i=0; i<self.campaign.members.length; i++){
              if(self.campaign.members[i].name == $scope.user.name){
                self.inTrip = true
                break;
              }
          }
      }
      self.isInTrip()
      self.joinTrip = function(){
        self.campaign.members.push({
            name: $scope.user.name,
            picture: $scope.user.picture
        });
        self.inTrip = true
      }

    }
})()
