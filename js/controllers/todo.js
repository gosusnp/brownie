angular.module('brownie').controller('TodoCtrl', [
    '$scope',
    function($scope) {
    	$scope.remaining = function() {
    	    var count = 0;
    	    angular.forEach($scope.tasks, function(task) {
    	      count += task.done ? 0 : 1;
    	    });
    	    return task;
    	  };
    }
]);
