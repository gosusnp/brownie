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

var app = angular.module('brownie', ['ui.sortable']);

app.controller('MainCtrl', [
	'$scope', '$location', '$anchorScroll',
	function($scope,$location,$anchorScroll) {
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
		{type: 'canvas', name:'Picasso style ^^'},
		];
		
		/* PHOTOS */
		$scope.addPhoto = function() {
			console.log("Add new photo !");
			var appControl = new tizen.ApplicationControl(
					"http://tizen.org/appcontrol/operation/create_content",
					null,
					"image/jpg");
			tizen.application.launchAppControl(appControl, null, photosuccess, photofail, photowhatever);
		}
		
		function photosuccess(photos) {
			console.log("picture taken !");
		}
		
		function photofail(error) {
			console.log("fail taking picture");
		}
		
		function photowhatever() {
			console.log("whatever...");
		}
		/* ! PHOTOS ! */
	
		
		$scope.addContat = function() {
			var addressbook;
			
			var sortingMode =  new tizen.SortMode('displayName', 'ASC');
			  try {
			    tizen.contact.find(function(contacts) {
			    	console.log(contacts);
			    }, function(error) {
			    	console.log(errors)
			    },
			    null, sortingMode);
			  } catch (err) {
			    console.log( 'The following error occurred while finding: ' +  err.name);
			  }
			  
			//tizen.contact.getAddressBooks(addressbooksuccess, addressbookfail);	
		}
		
		function addressbooksuccess(addressbooks) {
		    if(addressbooks.length > 0) {
		      addressbook = addressbooks[0];
		      console.log('The addressbook type is ' + addressbook.type +
		            ' and name ' + addressbook.name);

		      try {
		        addressbook.find(contactsFoundCB, errorCB, filter);
		      } catch (err) {
		        console.log( 'The following error occurred while finding: ' +  err.name);
		      }
		    }
		  }
		
		function addressbookfail(err) {
		    console.log( 'The following error occurred: ' +  err.name);
		  }
	}
]);
