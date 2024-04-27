// List of current usernames
var currentUsers = ['Admin', 'Ali', 'Ahmed', 'John', 'Eric'];
// List of new usernames, some of which already exist in currentUsers
var newUsers = ['Admin', 'Fatima', 'Haseeb', 'Hamzaa', 'Noor'];
newUsers.forEach(function (newUser) {
    var isTaken = currentUsers.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); });
    if (isTaken) {
        console.log("Sorry ".concat(newUser, ", That name is taken."));
    }
    else {
        console.log("Yes ".concat(newUser, ", is still available list."));
    }
});
