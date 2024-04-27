let guests: string[]= ["Afsheen","Hania","Ayesha","Alina","Rayan","Ali"];
console.log("Unfortunately, I can't invite you to dinner.");
while (guests . length >2) {
    let removedGuest=
 guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
guests.forEach(guest => {
    console.log(`Dear ${guest},you're still invitedto dinner.`);
});
guests.splice(0, guests.length);
console.log(guests);// shows an empty list

