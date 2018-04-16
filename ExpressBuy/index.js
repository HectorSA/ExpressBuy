// script.js

// create the module and name it indexapp
var indexApp = angular.module('indexApp', ['ngRoute']);

// configure our routes
indexApp.config(function ($routeProvider) {
    $routeProvider

        // route for the index page
        .when('/', {
            templateUrl: 'app/expressbuy/ebTemplate.html',
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
});


// Used on the index page
indexApp.controller('indexController', function ($scope, $location) {

    $scope.categories = productsCategories;

    $scope.changeView = function (view) {
        $location.path(view);
    }
});