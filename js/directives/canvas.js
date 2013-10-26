angular.module('brownie').directive('mycanvas', [
    function() {
        return {
            restrict: 'E',
            templateUrl: 'views/canvas.html',
            controller: 'CanvasCtrl',
        }
    }
]);
