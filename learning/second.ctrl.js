pioneer.controller('secondCtrl', function($rootScope, $scope, commonService){

  $scope.animals = ['viper','cat','dog','jackal','Ant'];

  $scope.$watch('currentTime', function (newVal) {
    $scope.thatTime = newVal;
  });

  $rootScope.birds.push('Mynah');

  $scope.birds = commonService.data;

});