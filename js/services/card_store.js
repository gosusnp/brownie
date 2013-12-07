angular.module('brownie').factory('cardStore', [
    function() {
        var cardStore = {
            cards: [],

            getCards: function() {
                data = localStorage.getItem("cards");
                if (data !== null) {
                    cardStore.cards = angular.fromJson(data);
                } else {
                	var d = new Date();
                    cardStore.cards = [
                        {name:"Welcome to Brownie", color: "blue", created_at:d, items:
                        	[
                        	 {type: 'note', text: 'Want a brownie?'},
                        	 {type: 'todo', title: 'Best brownie ever!', tasks:
                        		 [
                        		  {text: 'Be hungry', done: true},
                        		  {text: '250g butter', done: false},
                        		  {text: '150g sugar', done: false},
                        		  {text: '60g flour', done: false},
                        		  {text: '3 eggs', done: false}
                        		  ]
                        	 },
                        	 {type: 'note', text: 'Mix it all, cook it well and finally, just enjoy some tasty brownies!'}
                        	 ]
                        }];
                }
            },
            saveCards: function() {
                localStorage.setItem("cards", angular.toJson(cardStore.cards));
            },
        };
        return cardStore;
    }
]);
