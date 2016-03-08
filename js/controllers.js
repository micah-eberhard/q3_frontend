myApp.controller('HomeController', ['$scope', 'getStats', function($scope, getStats) {
  var vm = this;
  vm.header = "Overview";
  vm.allStatus = [];
  vm.allAvg = [];

  getStats.statusAll().then(function(data){
    vm.allStatus = data;
  });
  getStats.avgAll().then(function(data2){
    vm.allAvg = data2;
  });

  setInterval(function(){
    getStats.statusAll().then(function(data){
      console.log(data);
      vm.allStatus = data;
    });
    getStats.avgAll().then(function(data2){
      console.log(data2);
      vm.allAvg = data2;
    });
  }, 600);
}]);

myApp.controller('IndexController', ['$scope', function($scope) {
  var vm = this;
  vm.header = "Index";

}]);
