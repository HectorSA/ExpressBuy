// script.js

// create the module and name it indexapp
var indexApp = angular.module('indexApp', ['ngRoute']);

// configure our routes
indexApp.config(function ($routeProvider) {
    $routeProvider

        // route for the index page
        .when('/', {
            templateUrl: 'app/startingPage/startingPage.html',
            controller: 'indexController'
        })

        // route for the search page
        .when('/search/:searchedItem', {
            templateUrl: 'app/search/sTemplate.html',
            controller: 'searchController'
        })

        .when('/addItem', {
            templateUrl: 'app/addItem/addItem.html',
            controller: 'addItemController'
        })

        .when('/cart', {
            templateUrl: 'app/cart/viewCart.html',
            controller: 'viewCartController'
        })

        .when('/checkout', {
            templateUrl: 'app/checkout/checkout.html',
            controller: 'checkoutController'
        })

        .when('/login', {
            templateUrl: 'app/login/login.html',
            controller: 'loginController'
        })

        .when('/register', {
            templateUrl: 'app/register/register.html',
            controller: 'registerController'
        })

        .when('/purchased', {
            templateUrl: 'app/purchasedPage/purchasedPage.html',
            controller: 'purchasedController'
        })

        .when('/registered', {
            templateUrl: 'app/registered/registered.html',
            controller: 'registeredController'
        })

        .when('/customerInfo', {
            templateUrl: 'app/customerInfo/customerInfo.html',
            controller: 'customerInfoController'
        })
});


// Used on the index page
indexApp.controller('indexController', function ($scope, $route, $rootScope, $location, $timeout, fauxLogin) {

    user = fauxLogin.getCurrentUser();

    $scope.categories = productsCategories;
    $scope.firstName = user.firstName;
    $scope.lastName = user.lastName;

    if (fauxLogin.isLoggedIn()) {
        $rootScope.menuBarLogInTitle = "Welcome " + user.firstName + "  ";
    } else {
        $rootScope.showLogout = false;
    }
    
    $scope.logout = function () {
        fauxLogin.default();
        $timeout($scope.changeView("/"), 1000);
        $route.reload();
    }

    $scope.changeView = function (view) {
        $location.path(view);
    }
});