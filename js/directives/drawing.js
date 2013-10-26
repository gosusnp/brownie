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
                var lastX;
                var lastY;

                element.bind('touchstart', function(event){
                    lastX = event.offsetX;
                    lastY = event.offsetY;
                    // begins new line
                    ctx.beginPath();
                    drawing = true;
                });
                element.bind('mousedown', function(event){
                    lastX = event.offsetX;
                    lastY = event.offsetY;
                    // begins new line
                    ctx.beginPath();
                    drawing = true;
                });

                element.bind('touchmove', function(event){
                    if(drawing){
                        // get current mouse position
                        currentX = event.offsetX;
                        currentY = event.offsetY;

                        draw(lastX, lastY, currentX, currentY);

                        // set current coordinates to last one
                        lastX = currentX;
                        lastY = currentY;
                    }
                });

                element.bind('mousemove', function(event){
                    if(drawing){
                        // get current mouse position
                        currentX = event.offsetX;
                        currentY = event.offsetY;

                        draw(lastX, lastY, currentX, currentY);

                        // set current coordinates to last one
                        lastX = currentX;
                        lastY = currentY;
                    }
                });

                element.bind('touchend', function(event){
                    // stop drawing
                    drawing = false;
                });
                element.bind('mouseup', function(event){
                    // stop drawing
                    drawing = false;
                });

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
