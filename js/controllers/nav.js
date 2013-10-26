angular.module('brownie').controller('NavCtrl', [
    '$scope', 'cardStore',
    function($scope, cardStore) {
        $scope.save = function() {
            cardStore.saveCards();
        }
    }
]);

