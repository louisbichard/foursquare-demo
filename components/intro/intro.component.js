andiapp.directive('adIntro', function(
    $rootScope
) {
    return {
        restrict: 'E',
        link: function($scope) {

        
            var hideIntro = function() {
                $scope.hide_intro = true
            };

            $rootScope.$on('hideIntro', hideIntro);

            $scope.hideIntro = hideIntro;

        },
        scope: {},
        templateUrl: 'components/intro/intro.html'
    };
});
