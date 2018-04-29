indexApp.controller('loginController', function ($scope, $rootScope, $location, fauxLogin) {
    $scope.changeView = function (view) {
        $location.path(view);
    }

    $scope.email = '';
    $scope.password = '';

    $scope.updateMenuBar = function () {
        if (fauxLogin.isLoggedIn()) {
            $rootScope.menuBarLogInTitle = "Welcome "+ user.firstName + "  ";
        } else {
            $rootScope.menuBarLogInTitle = 'Sign in or register';
        }
    }

    // When user hits submit (login) this function runs
    $scope.login = function () {
        console.log('User clicked login', $scope.email, $scope.password);
        fauxLogin.login($scope.email, $scope.password);
        $scope.updateMenuBar();
        //console.log("Current User:",fauxLogin.getCurUser());
    };

});