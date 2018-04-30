indexApp.controller('customerInfoController', function ($scope, $location) {
    $scope.changeView = function (view) {
        $location.path(view);
    }
});