//Exercise 12: Greetings
var names = ["shazia", "Fozia", "Nasreen", "Farhat", "javed"];
var greeting = "Hello,";
// print a personalized message to each person
for (var i = 0; i < names.length; i++) {
    console.log("".concat(greeting).concat(names[i], "!"));
}
