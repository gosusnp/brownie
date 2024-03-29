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

            var progression = 0;
            if ($scope.item.tasks) {
                progression = Math.floor((($scope.item.tasks.length - count) / ($scope.item.tasks.length)) * 100)
            }
      	    return progression;
	};

	$scope.addTask = function() {
		// FIXME default text should be '', however, if it is set to '',
                // it is not editable through the UI
		$scope.item.tasks.push({text: '', done: false});
	}
    }
]);

