angular.module('brownie').directive('contact', [
    function() {
        return {
            restrict: 'E',
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl',
        }
    }
]);
