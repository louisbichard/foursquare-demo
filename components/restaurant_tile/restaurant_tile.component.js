flovigo.directive('adRestaurantTile', function() {
    return {
        restrict: 'E',
        link: function($scope) {

            console.log('loaded restaurant tile!');

        },
        scope: {
            venue: "="
        },
        templateUrl: 'components/restaurant_tile/restaurant_tile.html'
    };
});
