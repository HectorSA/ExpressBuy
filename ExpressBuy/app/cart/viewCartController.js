indexApp.controller('viewCartController', function ($scope, $filter, $location, $route) {

    $scope.reloadRoute = function () {
        $route.reload();
    }

    $scope.isEmpty = function () {
        if (fauxcart.length > 0) {
            return false;
        } else { // If empty disable = true
            return true;
        }
    }


    $scope.removeFromCart = function removeFC(itemID) {
        index = fauxcart.indexOf(itemID);
        if (index !== -1) fauxcart.splice(index, 1);
    }

    // See if the search finds a match in the product category
    var result = $filter('filter')(productsForSale,
        { id: fauxcart },
    );

    cartItemArray = [];

    for (var i = 0; i < fauxcart.length; i++) {
        var result = $filter('filter')(productsForSale,
            { id: fauxcart[i] },
        );
        console.log(result)
        cartItemArray.push(result[0]);
    }

    $scope.changeView = function (view) {
        $location.path(view);
    }

    console.log(cartItemArray);

    $scope.cartItems = cartItemArray;
});