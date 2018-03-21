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
            templateUrl: 'app/aiService/addItem.html',
            controller: 'addItemController'
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
    { category: 'Monitors', name: 'xxElITESnipeRMonitorxx', specs: '240hz 1ms response' }
];


// Used on the index page
indexApp.controller('indexController', function ($scope, $location) {

    $scope.categories = productsCategories;

    $scope.changeView = function (view) {
        $location.path(view);
    }
});


// Search on searches
indexApp.controller('searchController', function ($scope, $routeParams, $filter) {
    
    searchCategory = $routeParams.searchedItem;


    // See if the search finds a match in the product category
    var result = $filter('filter')(productsForSale,
        { category: searchCategory },
    );

    // If there is no match look for a match in product name
    if (result.length === 0) {
        var result = $filter('filter')(productsForSale,
            { name: searchCategory }
        );
    };

    // If there is no match look for a match in product specs
    if (result.length === 0) {
        var result = $filter('filter')(productsForSale,
            { specs: searchCategory }
        );
    };


    console.log(result);
    console.log(searchCategory);
    console.log(result.length);
    $scope.itemsFS = result;
});

indexApp.controller('addItemController', function ($scope,aiService) {
    $scope.addItem = aiService.item;
});