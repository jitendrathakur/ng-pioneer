pioneer.directive('myTodo', function(){
  return {
    restrict: 'EA',
    templateUrl: 'lib/learning/todo.html',
    scope: {
      list: '=',
      title: '@',
      get: '&'
    }
  };
});