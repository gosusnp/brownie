angular.module('brownie').controller('NavCtrl', [
    '$scope', '$state', 'cardStore', 'notification',
    function($scope, $state, cardStore, notification) {
        $scope.$state = $state;
        $scope.save = function() {
            cardStore.saveCards();
            notification.add('saved');
        }
    }
]);

