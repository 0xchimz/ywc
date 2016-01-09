;(function(){
  angular
    .module('controller.campaign', ['angularMoment'])
    .controller('campaignController', campaignCtrl)

    campaignCtrl.$inject = []
    function campaignCtrl (){
      var self = this;
      self.owner = {
        name: "smart Olanwanitchakul",
        picture: "http://zblogged.com/wp-content/uploads/2015/11/5.png"
      };
      self.campaign = {
        name: "ปาย - เชียงใหม่",
        picture: "https://i.ytimg.com/vi/GE2BkLqMef4/maxresdefault.jpg",
        short_description: "blah blah blah",
        start_date: "",
        dayList:[
          {
            date : "",
            province : "กรุงเทพ",
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
      };
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

    }
})()
