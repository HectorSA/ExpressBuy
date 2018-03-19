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
        .when('/search/:searchedItem', {
            templateUrl: 'app/search/sTemplate.html',
            controller: 'searchController'
        })

});


productsCategories = [
    { name: 'SSD Drives' },
    { name: 'Monitors' },
    { name: 'Graphics Cards' }
];

productsForSale = [
    { category: 'SSD Drives', name: 'Samsung 860 pro', specs: 'Read/Write: 500/500gbps' },
    { category: 'SSD Drives', name: 'Samsung 850 pro', specs: 'Read/Write: 400/400gbps' },
    { category: 'Monitors', name: 'xxElITESnipeRMonitor', specs: '240hz 1ms response' }
];

indexApp.controller('indexController', function ($scope, $location) {

    $scope.categories = productsCategories;

    $scope.changeView = function (view) {
        $location.path(view);
    }
});

indexApp.controller('searchController', function ($scope, $routeParams, $filter) {
    
    searchCategory = $routeParams.searchedItem;


    var result = $filter('filter')(productsForSale,
        { category: searchCategory },
        true,
    );

    console.log(result);
    console.log(searchCategory);

    $scope.itemsFS = result;
});

