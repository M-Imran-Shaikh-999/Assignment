

// List of current usernames
let currentUsers = [] =['Admin', 'Ali', 'Ahmed', 'John', 'Eric'];

// List of new usernames, some of which already exist in currentUsers
let newUsers = ['Admin', 'Fatima', 'Haseeb', 'Hamza', 'Noor'];

newUsers.forEach(newUser=> {
    const isTaken = currentUsers.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase());

    
    if (isTaken) {
        console.log(`Sorry ${newUser}, That name is taken.`);
    } else {
        console.log(`Yes ${newUser}, is still available list.`);
    }
});







