function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a Sandwitch with the following items: ".concat(items.join("")));
}
//calling the function with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Chicken", "Mustard");
makeSandwich("Avocado", "Mayo", "Onion");
