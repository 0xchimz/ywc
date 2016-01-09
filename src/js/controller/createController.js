;(function(){
  angular
    .module('controller.create', ['textAngular', 'datePicker', 'angularMoment'])
    .controller('createController', createCtrl)

    createCtrl.$inject = ['$scope']
    function createCtrl ($scope){
      var self = this

      self.campaign = {
        name: '',
        picture: 'https://i.ytimg.com/vi/GE2BkLqMef4/maxresdefault.jpg',
        short_description: '',
        date: {
          start: moment().valueOf(),
          end:  moment().add(7, 'days').valueOf()
        },
        prize: 0,
        size: 0,
        dateList: []
      }

      $scope.minDate = moment(self.campaign.date.start)
      $scope.maxDate = moment(self.campaign.date.end)

      self.addCampaign = function () {
        console.log($scope.campaignList)
        $scope.campaignList.push(self.campaign)
      }

      $scope.changeDate = function (modelName, newValue) {
        //Broadcast Min Max for picker date
        var values = {
          minDate: false,
          maxDate: false,
        }
        if (modelName === 'createCtrl.campaign.date.start') {
          values.minDate = newValue;
          $scope.$broadcast('pickerUpdate', ['campaignStartDate', 'campaignEndDate'], values);
          values.maxDate = moment(self.campaign.date.end);
        } else if (modelName === 'createCtrl.campaign.date.end') {
          values.maxDate = newValue;
          $scope.$broadcast('pickerUpdate', ['campaignStartDate', 'campaignEndDate'], values);
          values.minDate = moment(self.campaign.date.start);
        }
        //Add date
        self.addDate();
      }

      self.addDate = function(){
        var start = moment(self.campaign.date.start)
        var end = moment(self.campaign.date.end)
        var diff = Math.floor(moment.duration(end.diff(start)).asDays())
        var tmpList = []
        for(var i = 0; i <= diff; i++){
          var index = moment(start.valueOf()).add(i, 'days').valueOf()
          var tmp = {
            location: 'Bangkok',
            date: index,
            descriptuion: ''
          }
          for (var j = 0; j < self.campaign.dateList.length; j++) {
            if(moment(self.campaign.dateList[j].date).diff(moment(index), 'day') == 0){
              tmp.location = self.campaign.dateList[j].location
              tmp.date = self.campaign.dateList[j].date
              tmp.description = self.campaign.dateList[j].description
              break;
            }
          }
          tmpList.push(tmp)
        }
        self.campaign.dateList = tmpList
      }

      self.addDate()
    }
})()
