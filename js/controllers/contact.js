angular.module('brownie').controller('ContactCtrl', [
	'$scope',
	function($scope) {
		$scope.edit = false;
		/*
		$scope.contacts = [
		{
			displayName:"Jimmy Ma",
			displayContactId:"2",
			selected:false
		},
		{
			displayName:"Olivier Leplus",
			displayContactId:"1",
			selected:false
		},
		{
			displayName:"BeMyApp",
			displayContactId:"3",
			selected:false
		}];
		*/
		
		$scope.changestatus = function() {
	  		$scope.edit = !$scope.edit;
	  	};

	  	$scope.check = function(contact) {
	  		contact.selected = !contact.selected;
	  	};
	}
]);
