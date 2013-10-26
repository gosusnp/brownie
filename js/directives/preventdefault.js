angular.module('brownie').directive('preventDefault', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('touchend', function(e) {
                e.preventDefault();
            });
            element.bind('touchstart', function(e) {
                e.preventDefault();
            });
            element.bind('touchmove', function(e) {
                e.preventDefault();
            });
        }
    }
})
