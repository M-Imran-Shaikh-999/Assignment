var guestArr = ["Ahmed", "Alina", "Hania", "Mumtaz"];
var canNotAttend = "Mumtaz";
console.log(canNotAttend + " can not attend the dinner.");
var newGuest = "Imran";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", you are invited to the dinner."));
});
//guestArr .map((items) =>
//console.log(`Dear ${items}, I found a bigger Dinner table so i am invited more peoples.`)
//);
