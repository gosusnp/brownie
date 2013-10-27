angular.module('brownie').controller('NotificationsCtrl', [
    '$scope', 'notification',
    function ($scope, notification) {
        $scope.notifications = notification.list;
        $scope.remove = function(n) {
            delete $scope.notifications[n.timestamp];
        };
    }
]);
