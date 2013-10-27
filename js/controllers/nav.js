angular.module('brownie').controller('NavCtrl', [
    '$scope', 'cardStore', 'notification',
    function($scope, cardStore, notification) {
        $scope.save = function() {
            cardStore.saveCards();
            notification.add('saved');
        }
    }
]);

