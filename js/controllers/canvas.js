angular.module('brownie').controller('CanvasCtrl', [
    '$scope',
    function($scope) {
    	console.log("I am a canvas controller :)");
    	$rootScope.$watch('windowWidth', function(newVal, oldVal) {
    		resizeElement();
    	});
    }
]).run(['$rootScope', '$window', function($rootScopr,$window) {
	$rootScope.windowWidth = $window.outerWidth;
	angular.element($window).bind('resize',function(){
		$rootScope.windowWidth = $window.innerWidth;
		$rootScope.$apply('windowWidth');
	});
}]);
