indexApp.controller('checkoutController', function ($scope, $filter) {
    // See if the search finds a match in the product category
    var result = $filter('filter')(productsForSale,
        { id: fauxcart },
    );

    cartItemArray = [];
    cartTotal = 0;

    for (var i = 0; i < fauxcart.length; i++) {
        var result = $filter('filter')(productsForSale,
            { id: fauxcart[i] },
        );
        console.log(result);
        cartItemArray.push(result[0]);

        // Get the cost amount from the item
        itemAmount = result[0].price

        // Cost is a string so we got to convert to int
        itemDollar = Number(itemAmount.replace(/[^0-9\.-]+/g, ""));

        cartTotal += itemDollar;
    }


    $scope.cartT = cartTotal;
    $scope.cartTax = (cartTotal * .0825).toFixed(2);
    $scope.cartTotalWithTax = (cartTotal * 1.0825).toFixed(2);
    $scope.cartItems = cartItemArray;
});