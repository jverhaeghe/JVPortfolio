(function() {
    'use strict';

    angular
        .module('JVPortfolio.map',[])
        .directive('jvMap',JVMap);

    function JVMap(){

        var link = function(scope, element, attrs) {
            var map, infoWindow;
            var markers = [];

            // map config

            var mapOptions = {
                center: new google.maps.LatLng(scope.latitude,scope.longitude),
                zoom: 7,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: true,
                disableDefaultUI: true
            };

            // init the map
            function initMap() {
                if (map === void 0) {
                    map = new google.maps.Map(element[0], mapOptions);
                }
            }

            // place a marker
            function setMarker(map, position, title, content) {
                var marker;
                var markerOptions = {
                    position: position,
                    map: map,
                    title: title,
                    icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
                };

                marker = new google.maps.Marker(markerOptions);
                markers.push(marker); // add marker to array

                google.maps.event.addListener(marker, 'click', function () {
                    // close window if not undefined
                    if (infoWindow !== void 0) {
                        infoWindow.close();
                    }
                    // create new window
                    var infoWindowOptions = {
                        content: content
                    };
                    infoWindow = new google.maps.InfoWindow(infoWindowOptions);
                    infoWindow.open(map, marker);
                });
            }

            // show the map and place some markers
            initMap();

            setMarker(map, new google.maps.LatLng(scope.latitude,scope.longitude));

        };

        return {
            restrict: 'E',
            template: '<div id="gmaps"></div>',
            replace: true,
            link: link,
            scope :{
                latitude :"@",
                longitude :"@"
            }
        };

    }

})();