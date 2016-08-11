var pioneer = angular.module('pioneer',  []);
 // .config(routerConfig);


pioneer.controller('firstCtrl', function($rootScope, $scope){

    $rootScope.words = ['It','is','what','it','is']
});

pioneer.controller('secondCtrl', function($rootScope, $scope){

    $scope.animals = ['viper','cat','dog','jackal','owl']

    $rootScope.words.push('why');
});