andiapp.controller('mainController', function(
    $scope,
    $rootScope
) {


    $rootScope.$on('updateMap', function(event, data) {
        console.log('map changed, update it!');
        $scope.map.center.latitude = data.center.latitude;
        $scope.map.center.longitude = data.center.longitude - 0.001;
        $scope.map.zoom = data.zoom;
        $scope.marker.coords.latitude = data.center.latitude;
        $scope.marker.coords.longitude = data.center.longitude;
    });
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

    $scope.marker = {
        id: 0,
        coords: {
            latitude: 40.1451,
            longitude: -99.6680
        },
        options: { draggable: true },
        events: {
            dragend: function(marker, eventName, args) {
                $log.log('marker dragend');
                var lat = marker.getPosition().lat();
                var lon = marker.getPosition().lng();
                $log.log(lat);
                $log.log(lon);

                $scope.marker.options = {
                    draggable: true,
                    labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
                    labelAnchor: "100 0",
                    labelClass: "marker-labels"
                };
            }
        }
    };


});
