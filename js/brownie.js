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
            {type: 'todo', name:"My ToDo", tasks: [{
            	text:"a",
            	done:true,
            },
            {
            	text:"b",
            	done:false,
            },
            {
            	text:"c",
            	done:false,
            }
            ]},
            {type: 'todo', name:"Yet Another ToDo list ^^", tasks: [
{
	text:"a",
	done:false,
},
{
	text:"b",
	done:false,
},
{
	text:"c",
	done:false,
}
                                                                    ]},
            {type: 'note', text:"Note 1"},
            {type: 'note', text:"Note 2"},
            {type: 'canvas'},
        ];
    }
]);
