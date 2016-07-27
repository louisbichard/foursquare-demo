flovigo.controller('mainController', function(
    $scope,
    $http
) {


    $scope.test = "test";


    return $http.get("https://api.foursquare.com/v2/venues/search?client_id=ETZDEF0NDJZ4IFRGMJSOVVBPTUXBODFMAWLDRMXQO1QRKP3W&client_secret=DO0X51F1NFQPQKP0KPBYSOIVZHCGWTNACYSLF1YCNLXCAQUJ&v=20130815&ll=40.7,-74&query=sushi")
        .success(function(data){
            console.log(data);
        });

});
