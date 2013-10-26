angular.module('brownie').directive('todo', [
    function() {
        return {
            restrict: 'E',
            templateUrl: 'views/todo.html',
            controller: 'TodoCtrl',
        }
    }
]);
