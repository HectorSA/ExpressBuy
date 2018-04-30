indexApp.controller('registerController', function ($scope, $rootScope, $timeout, $location, fauxLogin) {

    $scope.changeView = function (view) {
        $location.path(view);
    }

    $scope.firstName = '';
    $scope.lastName = ''
    $scope.email = '';
    $scope.password = '';
    $scope.passwordConfirm = '';


    $scope.register = function () {
        console.log("First name", $scope.firstName, "Last name", $scope.lastName,
            "email", $scope.email, "pass", $scope.password, "passcon", $scope.passwordConfirm);

        // If passwords match register user and add to list of users
        if ($scope.passwordsMatch()) {
            newUser = fauxLogin.addUser($scope.email, $scope.firstName, $scope.lastName,
                $scope.password);

            fauxLogin.setCurUser(newUser);
            $rootScope.menuBarLogInTitle = "Welcome " + newUser.firstName + "  ";

            $rootScope.showLogout = true;
            $timeout($scope.changeView("/registered"), 1000);
        }
    }

    $scope.passwordsMatch = function() {
        if ($scope.password === $scope.passwordConfirm) {
            return true;
        } else {
            return false;
        }
    }

    $scope.passwordCorrectLength = function () {
        if ($scope.password.length > 4) {
            return true;
        } else {
            return false;
        }
    }
});