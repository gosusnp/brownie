angular.module('brownie').factory('cardStore', [
    function() {
        var cardStore = {
            cards: [],

            getCards: function() {
                data = localStorage.getItem("cards");
                if (data !== null) {
                    cardStore.cards = angular.fromJson(data);
                } else {
                    cardStore.cards = [{items: []}];
                }
            },
            saveCards: function() {
                localStorage.setItem("cards", angular.toJson(cardStore.cards));
            },
        };
        return cardStore;
    }
]);
