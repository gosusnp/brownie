angular.module('brownie').controller('LocationCtrl', [
    '$scope',
    function($scope) {
        if (!$scope.item) {
            $scope.item = {coords: {}};
        } else if (!$scope.item.hasOwnProperty('coords')) {
            $scope.item.coords = {};
        }
    }
]);
