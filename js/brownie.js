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
		{type: 'todo', name:"Ménage", tasks: [{
			text:"Faire à manger",
			done:true,
		},
		{
			text:"Faire la vaisselle",
			done:false,
		},
		{
			text:"Laver le linge",
			done:false,
		}
		]},
		{type: 'todo', name:"Salade de saison (pour 2 personnes)", tasks: [
		{
			text:"2 Tomates",
			done:false,
		},
		{
			text:"2 oeufs",
			done:false,
		},
		{
			text:"salade",
			done:false,
		},
		{
			text:"poivrons rouge",
			done:false,
		},
		{
			text:"avocat",
			done:false,
		}
		]},
		{type: 'note', text:"Note 1"},
		{type: 'note', text:"Note 2"},
		{type: 'canvas'},
		];
		
		$scope.addNote = function() {
			console.log("Add new note !");
			$scope.items.push(
			{
				type:'note',
				text:''
			});
		}
		
		$scope.addTodo = function() {
			console.log("Add new todo !");
			$scope.items.push(
					{
						type:'todo',
						name:'',
						tasks: []
					});
		}
		
		$scope.addCanvas = function() {
			console.log("Add new canvas !");
			$scope.items.push(
					{
						type:'canvas'
					});
		}
	}
]);
