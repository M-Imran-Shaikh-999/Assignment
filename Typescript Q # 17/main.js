var guests = ["Afsheen", "Hania", "Ayesha", "Alina", "Rayan", "Ali"];
console.log("Unfortunately, I can't invite you to dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",you're still invitedto dinner."));
});
guests.splice(0, guests.length);
console.log(guests); // shows an empty list
