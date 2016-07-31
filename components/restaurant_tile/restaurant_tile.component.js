andiapp.directive('adRestaurantTile', function(
    $rootScope
) {
    return {
        restrict: 'E',
        link: function($scope) {

            $scope.showOnMap = function(venue) {
                $rootScope.hide_intro = true;
                $rootScope.$emit('hideIntro');
                $rootScope.$emit('updateMap', {
                    center: {
                        latitude: venue.location.lat,
                        longitude: venue.location.lng
                    },
                    zoom: 18
                });
            };

            $scope.goToWebsite = function(venue){
                alert('open link');
            };

            $scope.goOrder = function(venue){
                alert('open link');
            };

            $scope.goPhone = function(venue){
                alert('open link');
            };

            $scope.goMenu = function(venue){
                alert('open link');
            };

        },
        scope: {
            venue: "="
        },
        templateUrl: 'components/restaurant_tile/restaurant_tile.html'
    };
});
