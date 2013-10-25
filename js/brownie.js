//Initialize function
var init = function () {
    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });
};
// window.onload can work without <body onload="">
window.onload = init;

var app = angular.module('brownie', []);

app.controller('MainCtrl', [
    '$scope',
    function($scope) {
        $scope.items = [
            {type: 'todo', todos: ['a', 'b', 'c']},
            {type: 'todo', todos: ['a', 'b', 'c']},
            {type: 'note'},
            {type: 'canvas'},
        ];
    }
]);
