angular.module('brownie').controller('ContactCtrl', [
	'$scope',
	function($scope) {
		$scope.edit = true;
		$scope.contacts = [
		{
			displayName:"Jimmy Ma",
			displayContactId:"2"
		},
		{
			displayName:"Olivier Leplus",
			displayContactId:"1"
		},
		{
			displayName:"BeMyApp",
			displayContactId:"3"
		}];
		console.log($scope.contacts);
		
		$scope.changestatus = function() {
	  		$scope.edit = !$scope.edit;
	  	};

	  	$scope.check = function(contact) {
	  		contact.selected = !contact.selected;
	  	};
	}
]);
