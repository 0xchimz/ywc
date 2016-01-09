;(function(){
  angular
    .module('controller.create', ['textAngular', 'datePicker', 'angularMoment'])
    .controller('createController', createCtrl)

    createCtrl.$inject = ['$scope']
    function createCtrl ($scope){
      var self = this

      self.campaign = {
        date: {
          start: moment().valueOf(),
          end:  moment().add(7, 'days').valueOf()
        },
        dateList: []
      }

      $scope.minDate = moment(self.campaign.date.start)
      $scope.maxDate = moment(self.campaign.date.end)

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
        var diff = Math.floor(moment.duration(end.diff(start)).asDays()) + 1
        var tmpList = {}
        for(var i = 0; i<diff; i++){
          var index = start.add(i, 'days').valueOf()
          console.log(index)
          if(!self.campaign.dateList[index]){
            tmpList[index] = {
              location: 'Bangkok',
              date: index,
              description: ''
            }
          } else {
            var tmp = self.campaign.dateList[index]
            tmpList[index] = {
              location: tmp.location,
              date: tmp.date,
              description: tmp.description
            }
          }
        }
        self.campaign.dateList = tmpList
      }

      self.addDate()
    }
})()
