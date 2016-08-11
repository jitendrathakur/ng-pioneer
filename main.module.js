var pioneer = angular.module('pioneer',  []);
 // .config(routerConfig);

pioneer.factory('commonService', function() {

 var shared = {
    data: ''
  };

 return shared;
});


pioneer.controller('firstCtrl', function($rootScope, $scope, commonService){

    $rootScope.words = ['It','is','what','it','is'];

    commonService.data = $scope.words;
});

pioneer.controller('secondCtrl', function($rootScope, $scope, commonService){

    $scope.animals = ['viper','cat','dog','jackal','owl']

    $rootScope.words.push('why');

    $scope.words = commonService.data;

    console.log($scope.abroad);
});