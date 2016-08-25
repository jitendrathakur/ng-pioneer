pioneer.controller('thirdCtrl', function($scope){

  $scope.todo = [
    {name: 'Create a custom directive', completed: true},
    {name: 'Learn about restrict', completed: true},
    {name: 'Master scopes', completed: false}
  ];

  $scope.firstTodo = function() {
    alert($scope.todo[0].name);
  };

});