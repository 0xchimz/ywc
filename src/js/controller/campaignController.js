;(function(){
  angular
    .module('controller.campaign', ['angularMoment'])
    .controller('campaignController', campaignCtrl)

    campaignCtrl.$inject = ['$scope', '$stateParams']
    function campaignCtrl ($scope, $stateParams){
      var self = this;
      self.owner = {
        name: "smart Olanwanitchakul",
        picture: "http://zblogged.com/wp-content/uploads/2015/11/5.png"
      };
      self.campaign = $scope.campaignList[$stateParams.campaign_id];
      self.members = [
        {
          name: "chin clu bi",
          picture: "http://zblogged.com/wp-content/uploads/2015/11/17.jpg"
        },
        {
          name: "ong ong ong",
          picture: "http://www.almostsavvy.com/wp-content/uploads/2011/04/profile-photo.jpg"
        }
      ]

      self.joinTrip = function(){
        self.members.push({
            name: $scope.user.name,
            picture: $scope.user.picture
        });
      }

    }
})()
