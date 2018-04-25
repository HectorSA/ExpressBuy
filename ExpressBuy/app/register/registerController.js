indexApp.controller('registerController', function ($scope, $location) {

    $scope.changeView = function (view) {
        $location.path(view);
    }

});