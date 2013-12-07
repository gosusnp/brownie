angular.module('brownie').controller('CardCtrl', [
    '$scope', '$stateParams', '$modal', 'cardStore',
    function($scope, $stateParams, $modal, cardStore) {
        var scrollToBottom = function() {
            $("html, body").animate({ scrollTop: $(document).height() }, 1000);
        }

        $scope.addItem = function(item) {
            $scope.card.items.push(item);
            scrollToBottom();
        }
        $scope.addNote = function() {
            $scope.addItem({type: 'note', text: ''});
        }
        $scope.addTodo = function() {
            $scope.addItem({type: 'todo', title: 'Title', tasks: [{text: '', done: false}, {text: '', done: false}, {text: '', done: false}]});
        }
        $scope.addCanvas = function() {
            $scope.addItem({type: 'canvas', title:'Title', img: '', editable: true});
        }
        $scope.addLocation = function() {
            $scope.addItem({type: 'location', title: ''});
        }

        cardStore.getCards();
        $scope.card = cardStore.cards[$stateParams.id];

        // FIXME quick fix, we should rework directive
        $scope.sortableOptions = {
            handle: ".resize"
        };

        /* PHOTOS */
        $scope.addPhoto = function() {
            console.log("Add new photo !");
            var appControl = new tizen.ApplicationControl(
                    "http://tizen.org/appcontrol/operation/create_content",
                    null,
                    "image/jpg");
            tizen.application.launchAppControl(appControl, null,
                    function(){
            	console.log("launch appControl succeeded");
            	}, 
                function(e){
            		console.log("launch appControl failed. Reason: " + e.name);
            	}, 
                appControlReplyPhoto);
        }
        
        var appControlReplyPhoto = 
        { 
           /* Reply is sent if the requested operation is successfully delivered */
           onsuccess: function(reply) 
           { 
        	  var d = new Date();
              $scope.addItem({type: 'photo', title:'Title', url: reply[0].value[0], date:d });
              $scope.$apply();
           } 
        }
        /* ! PHOTOS ! */
        
        /* VIDEO */
        $scope.addVideo = function() {
            console.log("Add new video !");
            var appControl = new tizen.ApplicationControl(
                    "http://tizen.org/appcontrol/operation/create_content",
                    null,
                    "video/3gp");
            //izen.application.launchAppControl(appControl, null, photosuccess, photofail, photowhatever);
            tizen.application.launchAppControl(appControl, null,
                    function(){console.log("launch appControl succeeded");}, 
                    function(e){console.log("launch appControl failed. Reason: " + e.name);}, 
                    appControlReplyVideo);
        }
        
        var appControlReplyVideo = 
        { 
           /* Reply is sent if the requested operation is successfully delivered */
           onsuccess: function(reply) 
           { 
        	  console.log(reply);
        	  console.log("Adding video " + reply[0].value[0]);
        	  
        	  var d = new Date();
              $scope.addItem({type: 'video', title:'Title', url: reply[0].value[0], date:d });
              $scope.$apply();
           } 
        }
        /* ! VIDEO ! */
        

        $scope.addContact = function() {
        	try {
        		var sortingMode =  new tizen.SortMode('displayName', 'ASC');
                tizen.contact.find(function(contacts) {
                    console.log(contacts);
                    $scope.addItem({type:'contact', title:'Title', contacts:contacts});
                    $scope.$apply();
                }, function(error) {
                    console.log(errors)
                },
                null, sortingMode);
            } catch (err) {
                console.log( 'The following error occurred while finding: ' +  err);
            }
            /*
        	$scope.addItem({type:'contact', title:'', contacts:[
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
        	                                	           		}]});
        	*/
        	/*
            var addressbook;

            var sortingMode =  new tizen.SortMode('displayName', 'ASC');
            try {
                tizen.contact.find(function(contacts) {
                    console.log(contacts);
                    openContactsModal(contacts)
                }, function(error) {
                    console.log(errors)
                },
                null, sortingMode);
            } catch (err) {
                console.log( 'The following error occurred while finding: ' +  err);
            }	
            */
        	/*
        	openContactsModal([{
        		displayName:"Olivier Leplus",
        		displayContactId:"1"
        	},
        	{
        		displayName:"Jimmy Ma",
        		displayContactId:"2"
        	},
        	{
        		displayName:"BeMyApp",
        		displayContactId:"3"
        	}]);
        	*/
        }
    }
]);
