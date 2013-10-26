angular.module('brownie')
.run(['$rootScope', '$window', function($rootScope,$window) {
	angular.element($window).bind('resize',function(){
                $('.fill-width-resize').resize();
	});
}])
.directive('fillWidth', [
    '$rootScope',
    function($rootScope) {
        return {
            link: function(scope, iElement, iAttrs) {
                var parent = iElement.parent();
                parent.addClass('fill-width-resize');
                scope.width = parent.width();

                parent.bind('resize', function(e) {
                    scope.width = parent.width();
                    scope.$apply('width');
                    e.preventDefault();
                    e.stopPropagation();
                    return true;
                });
                var resize = function() {
                    iElement.attr('width', scope.width);
                };
                scope.$watch('width', function(newVal, oldVal) {
                    resize();
                });
                resize();
            }
        }
    }
])
;
