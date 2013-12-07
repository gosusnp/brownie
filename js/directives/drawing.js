angular.module('brownie').directive("drawing", [
    '$parse',
    function($parse){
    return {
        restrict: "A",
            link: function(scope, element, attr){
                var modelVar = attr.drawing,
                    modelAttribute = $parse(modelVar);

                var ctx = element[0].getContext('2d');
                // variable that decides if something should be drawn on mousemove
                var drawing = false;

                var getX = function (event) {
                    if(event.type.indexOf("touch") > -1) {
                        return event.targetTouches[0].pageX - angular.element(element).offset().left;
                    } else {
                        return event.offsetX;
                    }
                };
                var getY = function (event) {
                    if(event.type.indexOf("touch") > -1) {
                        return event.targetTouches[0].pageY - angular.element(element).offset().top;
                    } else {
                        return event.offsetY;
                    }
                };
                var moveStart = function(event) {
                	if (!scope.item.editable)
                		return;

                    drawing = true;
                    ctx.beginPath();
                    ctx.moveTo(getX(event),getY(event));
                    event.preventDefault();
                };
                var moveContinue = function(event) {
                    if (drawing) {
                        ctx.lineTo(getX(event), getY(event));
                        ctx.strokeStyle = "#4bf";
                        ctx.stroke();
                        modelAttribute.assign(scope, element[0].toDataURL());
                    }
                    event.preventDefault();
                };
                var moveEnd = function(event) {
                    if (drawing) {
                        ctx.stroke();
                        ctx.closePath();
                        drawing = false;
                    }
                    event.preventDefault();
                };

                element[0].addEventListener('touchstart', moveStart, false);
                element[0].addEventListener('touchmove', moveContinue, false);
                element[0].addEventListener('touchcancel', moveEnd, false);
                element[0].addEventListener('touchend', moveEnd, false);
                element[0].addEventListener('touchleave', moveEnd, false);

                element.bind('mousedown', moveStart);
                element.bind('mousemove', moveContinue);
                element.bind('mouseup', moveEnd);

                // canvas reset
                var loadImage = function(data) {
                    var img = new Image();
                    img.onload = function() {
                        element[0].getContext("2d").drawImage(img, 0, 0);
                    };
                    img.src = data;
                }
                scope.$watch(modelVar, function(newValue, oldValue) {
                    if (newValue !== oldValue) {
                        loadImage(newValue);
                    }
                });
                var serializedImg = modelAttribute(scope);
                if (serializedImg) {
                    loadImage(serializedImg);
                }
            }
    };
}]);
