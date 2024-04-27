let guestArr: string[]= ["Ahmed","Alina","Hania","Mumtaz"];
let canNotAttend: string = "Mumtaz";
console.log(canNotAttend + " can not attend the dinner.");
let newGuest: string = "Imran";
guestArr [guestArr.indexOf(canNotAttend)]= newGuest;
console.log(guestArr);
guestArr.map((items) =>
console.log(`Dear ${items}, you are invited to the dinner.`)
)

//guestArr .map((items) =>
//console.log(`Dear ${items}, I found a bigger Dinner table so i am invited more peoples.`)
//);


