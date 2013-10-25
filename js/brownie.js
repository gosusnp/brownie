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

var app = angular.module('brownie', []);
