angular.module('brownie').directive('location', [
    function() {
        return {
            restrict: 'E',
            templateUrl: 'views/location.html',
            controller: 'LocationCtrl',
        }
    }
]);
