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
var app = angular.module('brownie', [
    'ui.router',
    'ui.bootstrap',
]);

app.config(function($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/cards");
    // Now set up the states
    $stateProvider
    .state('cards-list', {
        url: "/cards",
        controller: 'CardListCtrl',
        templateUrl: 'views/card_list.html',
    })
    .state('cards-get', {
        url: "/cards/:id",
        controller: 'CardCtrl',
        templateUrl: 'views/card.html',
    })
    .state('contacts-list', {
        url: "/contacts",
        controller: 'ContactListCtrl',
        templateUrl: 'views/contact_list.html',
    })
});
