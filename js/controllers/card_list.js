angular.module('brownie').controller('CardListCtrl', [
    '$scope', 'cardStore',
    function($scope, cardStore) {
        cardStore.getCards();
        $scope.cards = cardStore.cards;

        $scope.addCard = function() {
            cardStore.cards.push({items: []});
            cardStore.saveCards();
        }
    }
]);
