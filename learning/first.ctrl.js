pioneer.controller('firstCtrl', function($rootScope, $scope, commonService){

  $rootScope.birds = ['Cock','Duck','Eagle','Kite','Parrot'];

  $rootScope.currentTime = Date();

  commonService.data = $scope.birds;
});