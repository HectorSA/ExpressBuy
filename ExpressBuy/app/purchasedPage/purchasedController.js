indexApp.controller('purchasedController', function ($scope, $location) {
    $scope.changeView = function (view) {
        $location.path(view);
    }

});