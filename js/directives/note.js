angular.module('brownie').directive('note', [
    function() {
        return {
            restrict: 'E',
            template: '<ul><li ng-repeat="content in item.todos" ng-click="update($index)">{{content}}</li></ul>',
            controller: 'NoteCtrl',
        }
    }
]);
