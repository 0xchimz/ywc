;(function(){
  angular
    .module('controller.main', [])
    .controller('mainController', mainCtrl)
    .controller('homeController', homeCtrl)
    .controller('tripController', tripCtrl)
    .controller('reviewController', reviewCtrl)

    mainCtrl.$inject = ['$scope']
    function mainCtrl ($scope){
      var self = this
      $scope.user = {
          name : "Worapon Olanwanitchakul",
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
            ],
            price: 5000,
            owner: {
              name: "smart Olanwanitchakul",
              picture: "http://zblogged.com/wp-content/uploads/2015/11/5.png"
            },
            members: [
              {
                name: "chin clu bi",
                picture: "http://zblogged.com/wp-content/uploads/2015/11/17.jpg"
              },
              {
                name: "ong ong ong",
                picture: "http://www.almostsavvy.com/wp-content/uploads/2011/04/profile-photo.jpg"
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
            ],
            price: 2000,
            owner: {
              name: "smart Olanwanitchakul",
              picture: "http://zblogged.com/wp-content/uploads/2015/11/5.png"
            },
            members: [
              {
                name: "chin clu bi",
                picture: "http://zblogged.com/wp-content/uploads/2015/11/17.jpg"
              },
              {
                name: "ong ong ong",
                picture: "http://www.almostsavvy.com/wp-content/uploads/2011/04/profile-photo.jpg"
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
            ],
            price: 7000,
            owner: {
              name: "smart Olanwanitchakul",
              picture: "http://zblogged.com/wp-content/uploads/2015/11/5.png"
            },
            members: [
              {
                name: "chin clu bi",
                picture: "http://zblogged.com/wp-content/uploads/2015/11/17.jpg"
              },
              {
                name: "ong ong ong",
                picture: "http://www.almostsavvy.com/wp-content/uploads/2011/04/profile-photo.jpg"
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
            ],
            price: 12000,
            owner: {
              name: "smart Olanwanitchakul",
              picture: "http://zblogged.com/wp-content/uploads/2015/11/5.png"
            },
            members: [
              {
                name: "chin clu bi",
                picture: "http://zblogged.com/wp-content/uploads/2015/11/17.jpg"
              },
              {
                name: "ong ong ong",
                picture: "http://www.almostsavvy.com/wp-content/uploads/2011/04/profile-photo.jpg"
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
    tripCtrl.$inject =['$scope']
    function tripCtrl ($scope){
      var self = this

    }
    reviewCtrl.$inject =['$scope']
    function reviewCtrl ($scope){
      var self = this

    }
})()
