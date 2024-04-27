function makeSandwich(...items:string[]) {
console.log(`Making a Sandwitch with the following items: ${items.join(``,)}`)
}
//calling the function with different numbers of arguments
makeSandwich("Ham","Cheese","Lettuce","Tomato");
makeSandwich("Chicken","Mustard");
makeSandwich("Avocado","Mayo","Onion");