myApp.service('apiURL', function(){
  return {
    url: "https://young-journey-80187.herokuapp.com"
  };
});

myApp.service('getStats', ['$http', 'apiURL', function($http, apiURL){

  this.statusAll = function()
  {
    console.log("make get req");
    return $http({
      method: 'GET',
      url: apiURL.url + '/status/all'
    }).then(function(obj) {
      console.log(obj);
      return obj.data;
    }, function(error) {
      console.log(error);
    });
  };
  this.avgAll = function()
  {
    console.log("make get req");
    return $http({
      method: 'GET',
      url: apiURL.url + '/average/all'
    }).then(function(obj) {
      console.log(obj);
      return obj.data;
    }, function(error) {
      console.log(error);
    });
  };

  // function makeReq(route, option)
  // {
  //   console.log("make get req");
  //   return $http({
  //     method: 'GET',
  //     url: apiURL.url + '/'+route+'/'+option
  //   }).then(function(obj) {
  //     console.log(obj);
  //     return obj.data;
  //   }, function(error) {
  //     console.log(error);
  //   });
  // }
}]);
