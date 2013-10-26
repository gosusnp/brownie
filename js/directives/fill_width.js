angular.module('brownie')
.run(['$rootScope', '$window', function($rootScope,$window) {
	$rootScope.windowWidth = $window.outerWidth;
	angular.element($window).bind('resize',function(){
		$rootScope.windowWidth = $window.innerWidth;
		$rootScope.$apply('windowWidth');
	});
}])
.directive('fillWidth', [
    '$rootScope',
    function($rootScope) {
        return {
            link: function(scope, iElement, iAttrs) {
                var resize = function() {
                    iElement.attr('width', parseInt($rootScope.windowWidth) * 0.9);
                };
                $rootScope.$watch('windowWidth', function(newVal, oldVal) {
                    resize();
                });
                resize();
            }
        }
    }
])
;
