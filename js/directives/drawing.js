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
                // the last coordinates before the current move
                var lastX,
                    lastY,
                    currentX,
                    currentY;

                var getX = function (event) {
                    if(event.type.indexOf("touch") > -1) {
                        return event.targetTouches[0].pageX;
                    } else {
                        return event.offsetX;
                    }
                };
                var getY = function (event) {
                    if(event.type.indexOf("touch") > -1) {
                        return event.targetTouches[0].pageY;
                    } else {
                        return event.offsetY;
                    }
                };
                var moveStart = function(event) {
                    event.preventDefault();
                    lastX = getX(event);
                    lastY = getY(event);
                    // begins new line
                    ctx.beginPath();
                    drawing = true;
                };
                var moveContinue = function(event) {
                    event.preventDefault();
                    if (drawing) {
                        // get current mouse position
                        currentX = getX(event);
                        currentY = getY(event);

                        draw(lastX, lastY, currentX, currentY);

                        // set current coordinates to last one
                        lastX = currentX;
                        lastY = currentY;
                    }
                };
                var moveEnd = function(event) {
                    event.preventDefault();
                    // stop drawing
                    drawing = false;
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
                function reset(){
                    element[0].width = element[0].width;
                }
                function draw(lX, lY, cX, cY){
                    // line from
                    ctx.moveTo(lX,lY);
                    // to
                    ctx.lineTo(cX,cY);
                    // color
                    ctx.strokeStyle = "#4bf";
                    // draw it
                    ctx.stroke();
                    modelAttribute.assign(scope, element[0].toDataURL());
                }

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
