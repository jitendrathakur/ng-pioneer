pioneer.directive('myTodo', function(){
  return {
    restrict: 'EA',
    templateUrl: 'todo.html',
    scope: {
      list: '=',
      title: '@',
      get: '&'
    }
  };
});