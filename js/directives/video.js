angular.module('brownie').directive('bvideo', [
    function() {
        return {
            restrict: 'E',
            templateUrl: 'views/video.html',
            controller: 'VideoCtrl',
        }
    }
]);
