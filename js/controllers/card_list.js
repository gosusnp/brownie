angular.module('brownie').controller('CardListCtrl', [
    '$scope', 'cardStore',
    function($scope, cardStore) {
        cardStore.getCards();
        $scope.cards = cardStore.cards;

        $scope.addCard = function() {
        	var d = new Date();
            cardStore.cards.push({name:"New card", created_at:d, items: []});
            cardStore.saveCards();
        }
        $scope.removeCard = function(index) {
        	cardStore.cards.splice(index, 1);
        	cardStore.saveCards();
        }
        
        $scope.stats = function(card) {
        	var stats = {
        			note: 0,
        			todo: 0,
        			photo: 0,
        			video: 0,
        			contact: 0,
        			location: 0
        	}
        	angular.forEach(card.items, function(value){
        		switch(value.type) {
        		case "note":
        			stats.note +=1;
        			break;
        		case "todo":
        			stats.dodo += 1;
        			break;
        		case "photo":
        			stats.photo += 1;
        			break;
        		case "video":
        			stats.video += 1;
        			break;
        		case "contact":
        			stats.contact += value.type.contacts.length;
        			break;
        		case "location":
        			stats.location += 1;
        			break;
        		case "":
        			break;
        		}
        		
        		return stats;
        	});
        }
    }
]);
