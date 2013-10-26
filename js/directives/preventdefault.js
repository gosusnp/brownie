angular.module('brownie').directive('preventDefault', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('touchend', function(e) {
                //alert('o//');
                e.preventDefault();
                //e.stopPropagation();
            });
            element.bind('touchstart', function(e) {
                //alert('o//');
                e.preventDefault();
                //e.stopPropagation();
            });
            element.bind('touchmove', function(e) {
                //alert('o//');
                e.preventDefault();
                //e.stopPropagation();
            });
            //$(element).click(function(event) {
            //    event.preventDefault();
            //});
        }
    }
})
