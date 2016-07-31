andiapp.directive('adLeftNav', function(
    $http,
    $q
) {
    return {
        restrict: 'E',
        link: function($scope) {

            $scope.search = "holloway";

            $scope.$watch('search', _.debounce(function(val) {
                if (val) {
                    callAPI()
                        .then(function(results) {
                            $scope.venues = results.data.response.venues;
                        });
                }
            }, 500));


            var callAPI = function() {                
                var api_url = "https://api.foursquare.com/v2/venues/search?client_id=ETZDEF0NDJZ4IFRGMJSOVVBPTUXBODFMAWLDRMXQO1QRKP3W&client_secret=DO0X51F1NFQPQKP0KPBYSOIVZHCGWTNACYSLF1YCNLXCAQUJ&v=20130815&ll=40.7,-74&query=";
                return $http.get(api_url + $scope.search);
            };

        },
        scope: {},
        templateUrl: 'components/left_nav/left_nav.html'
    };
});
