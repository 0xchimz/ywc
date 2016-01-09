;(function(){
  angular
    .module('controller.reviewCampaign', [])
    .controller('reviewCampaignController', rvCampCtrl)

    rvCampCtrl.$inject = ['$scope']
    function rvCampCtrl ($scope){
      var self = this
      self.campaign = $scope.rvCampaignList[$stateParams.campaign_id];
    }
})()
