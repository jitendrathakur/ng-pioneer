var pioneer = angular.module('pioneer',  []);
 // .config(routerConfig);

pioneer.factory('commonService', function() {

 var shared = {
    data: ''
  };

 return shared;
});


pioneer.controller('firstCtrl', function($rootScope, $scope, commonService){

    $rootScope.birds = ['Cock','Duck','Eagle','Kite','Parrot'];

    $rootScope.currentTime = Date();

    console.log($scope.currentTime);

    commonService.data = $scope.birds;
});

pioneer.controller('secondCtrl', function($rootScope, $scope, commonService){

    $scope.animals = ['viper','cat','dog','jackal','Ant'];

    $scope.$watch('currentTime', function (newVal, oldVal) {
    	$scope.thatTime = newVal;
    });

    $rootScope.birds.push('Mynah');

    $scope.birds = commonService.data;


});