// Search on searches
indexApp.controller('searchController', function ($scope, $routeParams, $filter) {

    searchCategory = $routeParams.searchedItem;

    $scope.addToCart = function addTC(itemID) {
        fauxcart.push(itemID);
        console.log(fauxcart);
        console.log(itemID)
    }




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

    // If there is no match look for a match in product selling point
    if (result.length === 0) {
        var result = $filter('filter')(productsForSale,
            { sellingPoint: searchCategory }
        );
    };

    if (searchCategory === "*") {
        var result = productsForSale;
    }

    $scope.itemsFS = result;

});