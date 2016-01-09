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
        $scope.campaignList = [
          {
            name: "ปาย - เชียงใหม่",
            picture: "https://i.ytimg.com/vi/GE2BkLqMef4/maxresdefault.jpg",
            short_description: "blah blah blah",
            start_date: "",
            dateList:[
              {
                date : "",
                location : "กรุงเทพ",
                description : "blah blah blah ",
                hotel : {
                  name : "suwan hotel",
                  picture : "http://weknowyourdreams.com/images/house/house-06.jpg",
                  contact : {
                    tel : "084564589",
                    facebook : "http://facebook.com/smart2538"
                  }
                }
              }
            ]
          },
          {
            name: "ปาย - เชียงใหม่",
            picture: "https://i.ytimg.com/vi/GE2BkLqMef4/maxresdefault.jpg",
            short_description: "blah blah blah",
            start_date: "",
            dateList:[
              {
                date : "",
                location : "กรุงเทพ",
                description : "blah blah blah ",
                hotel : {
                  name : "suwan hotel",
                  picture : "http://weknowyourdreams.com/images/house/house-06.jpg",
                  contact : {
                    tel : "084564589",
                    facebook : "http://facebook.com/smart2538"
                  }
                }
              }
            ]
          },
          {
            name: "ปาย - เชียงใหม่",
            picture: "https://i.ytimg.com/vi/GE2BkLqMef4/maxresdefault.jpg",
            short_description: "blah blah blah",
            start_date: "",
            dateList:[
              {
                date : "",
                location : "กรุงเทพ",
                description : "blah blah blah ",
                hotel : {
                  name : "suwan hotel",
                  picture : "http://weknowyourdreams.com/images/house/house-06.jpg",
                  contact : {
                    tel : "084564589",
                    facebook : "http://facebook.com/smart2538"
                  }
                }
              }
            ]
          },
          {
            name: "ปาย - เชียงใหม่",
            picture: "https://i.ytimg.com/vi/GE2BkLqMef4/maxresdefault.jpg",
            short_description: "blah blah blah",
            start_date: "",
            dateList:[
              {
                date : "",
                location : "กรุงเทพ",
                description : "blah blah blah ",
                hotel : {
                  name : "suwan hotel",
                  picture : "http://weknowyourdreams.com/images/house/house-06.jpg",
                  contact : {
                    tel : "084564589",
                    facebook : "http://facebook.com/smart2538"
                  }
                }
              }
            ]
          }
        ]
        $scope.rvCampaignList = [
          {
            name: "กรุงเทพ - กาญจนบุรี",
            picture: "https://i.ytimg.com/vi/GE2BkLqMef4/maxresdefault.jpg",
            short_description: "blah blah blah",
            start_date: "",
            review: "GO SOME WHERE BLAH BLAH BLAH BLAH",
            score: 90

          },
          {
            name: "กรุงเทพ - กาญจนบุรี",
            picture: "https://i.ytimg.com/vi/GE2BkLqMef4/maxresdefault.jpg",
            short_description: "blah blah blah",
            start_date: "",
            review: "GO SOME WHERE BLAH BLAH BLAH BLAH",
            score: 90

          },
          {
            name: "กรุงเทพ - กาญจนบุรี",
            picture: "https://i.ytimg.com/vi/GE2BkLqMef4/maxresdefault.jpg",
            short_description: "blah blah blah",
            start_date: "",
            review: "GO SOME WHERE BLAH BLAH BLAH BLAH",
            score: 90

          },
        ]
    }

    homeCtrl.$inject = []
    function homeCtrl (){
      var self = this
      this.msg = 'สวัสดี OUTHAING'

    }
})()
