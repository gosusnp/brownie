angular.module('brownie').directive('photo', [
    function() {
        return {
            restrict: 'E',
            templateUrl: 'views/photo.html',
            controller: 'PhotoCtrl',
        }
    }
]);
