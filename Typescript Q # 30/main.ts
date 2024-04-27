let usernames: string [] = ['Admin','Arshad', 'Javed', 'Zafar','Owais'];
for (let username of usernames) {
    if (username === 'Admin')  {
        console.log(`hello ${username}, would you like to see a status report?`);
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}