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
            $scope.addItem({type: 'todo', name: '', tasks: []});
        }
        $scope.addCanvas = function() {
            $scope.addItem({type: 'canvas', img: ''});
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


        $scope.addContact = function() {
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
        }
        
        function openContactsModal(contacts) {

            var modalInstance = $modal.open({
              templateUrl: 'views/contactpopup.html',
              controller: ModalInstanceCtrl,
              resolve: {
                items: function () {
                  return contacts;
                }
              }
            });
            
            modalInstance.result.then(function (selectedItems) {
                $scope.selected = selectedItems;
          	  console.log("yeah!");
                console.log(selectedItems);
              }, function () {
              });
        }
    }
]);
