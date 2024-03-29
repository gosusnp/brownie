angular.module('brownie').directive('googleMaps', [
    '$http',
    function($http) {
        return {
            link: function (scope, iElement, iAttrs) {
                var mapOptions,
                    map;

                iElement.height(300);

                var updateMap = function(coords) {
                    mapOptions = {
                        zoom: 16,
                        center: new google.maps.LatLng(coords.latitude, coords.longitude)
                    };
                    map = new google.maps.Map(iElement[0], mapOptions);
                };

                var searchByCoords = function(coords) {
                    scope.loading = true;
                    scope.item.coords.latitude = coords.latitude;
                    scope.item.coords.longitude = coords.longitude;
                    updateMap(scope.item.coords);
                    //scope.$apply();
                    $http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+
                            coords.latitude + ',' + coords.longitude + '&sensor=true')
                        .success(function(data) {
                            for (var idx in data.results) {
                                var result = data.results[idx];
                                if (result.hasOwnProperty('formatted_address')) {
                                    scope.item.address = result.formatted_address;
                                    break;
                                }
                            }
                            //scope.$apply();
                            scope.loading = false;
                        })
                        .error(function(data) {
                            scope.loading = false;
                        })
                    ;
                };
                var searchByName = function(name) {
                    scope.loading = true;
                    $http.get('http://maps.googleapis.com/maps/api/geocode/json?address='+
                            encodeURIComponent(name) + '&sensor=false')
                        .success(function(data) {
                            if (data.results) {
                                var result = data.results[0];
                                scope.item.address = result.formatted_address;
                                scope.item.coords.latitude = result.geometry.location.lat;
                                scope.item.coords.longitude = result.geometry.location.lng;
                                updateMap(scope.item.coords);
                            }
                            scope.loading = false;
                        })
                        .error(function(data) {
                            scope.loading = false;
                        })
                    ;
                }

                scope.searchByCoords = searchByCoords;
                scope.searchByName = searchByName;

                if (!scope.item.coords.hasOwnProperty('latitude') || !scope.item.coords.hasOwnProperty('longitude')) {
                    scope.loading = true;
                    navigator.geolocation.getCurrentPosition(function(position) {
                        searchByCoords(position.coords);
                        scope.loading = false;
                    }, function(error) {
                        console.error(JSON.stringify(error));
                        scope.loading = false;
                    });
                } else {
                    updateMap(scope.item.coords);
                }
            }
        };
    }
]);
