indexApp.controller('loginController', function ($scope, $timeout, $rootScope, $location, fauxLogin) {
    $scope.changeView = function (view) {
        $location.path(view);
    }

    $scope.email = '';
    $scope.password = '';

    $scope.updateMenuBar = function (user) {
        console.log("Menu U", user);
        if (fauxLogin.isLoggedIn()) {
            $rootScope.menuBarLogInTitle = "Welcome "+ user.firstName + "  ";
        } else {
            $rootScope.showLogout = false;
        }
    }
    

    // When user hits submit (login) this function runs
    $scope.login = function () {
        console.log('User clicked login', $scope.email, $scope.password);


        user = fauxLogin.login($scope.email, $scope.password);
        if (user === null) {
            $scope.badLogin = true;
            console.log("FALSE")
        } else {
            $scope.badLogin = false;
            console.log("True")
            $scope.updateMenuBar(user);
            $rootScope.showLogout = true;
            $timeout($scope.changeView("/"), 1000);

        }

    };

});