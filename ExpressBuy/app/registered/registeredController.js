indexApp.controller('registeredController', function ($scope, $location) {
    $scope.changeView = function (view) {
        $location.path(view);
    }
});