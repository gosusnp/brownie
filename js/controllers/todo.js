angular.module('brownie').controller('TodoCtrl', [
    '$scope',
    function($scope) {
    	$scope.remaining = function() {
    	    var count = 0;
    	    angular.forEach($scope.item.tasks, function(task) {
    	      count += task.done ? 0 : 1;
    	    });
    	    return count;
    	  };
    	  
    	  $scope.progression = function() {
      	    var count = 0;
      	    angular.forEach($scope.item.tasks, function(task) {
      	      count += task.done ? 0 : 1;
      	    });
      	    var progression = Math.floor((($scope.item.tasks.length - count) / ($scope.item.tasks.length)) * 100)
      	    return progression;
      	  };
    }
]);

