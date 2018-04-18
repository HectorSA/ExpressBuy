indexApp.controller('loginController', function ($scope, $location) {
    $scope.changeView = function (view) {
        $location.path(view);
    }
});