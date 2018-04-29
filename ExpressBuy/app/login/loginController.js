indexApp.controller('loginController', function ($scope, $location, fauxLogin) {
    $scope.changeView = function (view) {
        $location.path(view);
    }

    $scope.email = '';
    $scope.password = '';

    $scope.login = function () {
        console.log('User clicked login', $scope.email, $scope.password);
        fauxLogin.login($scope.email, $scope.password);
        console.log(fauxLogin.getCurUser());
    };

});