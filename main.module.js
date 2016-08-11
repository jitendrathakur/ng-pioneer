var pioneer = angular.module('pioneer',  []);
 // .config(routerConfig);


pioneer.controller('firstCtrl', function($scope){

    $scope.words = ['It','is','what','it','is']
});

pioneer.controller('secondCtrl', function($scope){

    $scope.animals = ['viper','cat','dog','jackal','owl']
});