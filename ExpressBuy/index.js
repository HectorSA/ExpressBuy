// script.js

// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var indexApp = angular.module('indexApp', ['ngRoute']);

// configure our routes
indexApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'app/expressbuy/ebTemplate.html',
            controller: 'indexController'
        })

        // route for the about page
        .when('/search', {
            templateUrl: 'app/expressbuy/ebTemplate.html',
            controller: 'ebController'
        })

});


indexApp.controller('indexController', function ($scope, $location) {
    $scope.products = [
        { name: 'SSD Drives' },
        { name: 'Monitors' },
        { name: 'Graphics Cards' }
    ];

    $scope.changeView = function (view) {
        $location.path(view);
        console.log(view);
    }
});

