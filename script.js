let age = Math.floor(Math.random() * 100);
console.log("Age: ", age);
let gender = prompt("Enter the passenger's gender");
let ticket_price = Math.floor(Math.random() * 100);
console.log("Initial Ticket Price: ", ticket_price);
let ticket;

if (gender === 'Female') {
    if (age < 5) {
        ticket = 0;
        console.log("The Ticket is free");
    } else if (age <= 8 || age > 65) {
        ticket = Math.floor(0.5 * ticket_price);
        console.log(`The Ticket Price is: ${ticket}`);
    } else {
        ticket = Math.floor(0.5 * ticket_price);
        console.log(`The Ticket Price is: ${ticket}`);
    }
} else if (gender === 'Male') {
    if (age < 5) {
        ticket = 0;
        console.log("The Ticket is free");
    } else if (age <= 8) {
        ticket = Math.floor(0.5 * ticket_price);
        console.log(`The Ticket Price is: ${ticket}`);
    } else if (age > 65) {
        ticket = Math.floor(0.3 * ticket_price);
        console.log(`The Ticket Price is: ${ticket}`);
    } else {
        ticket = ticket_price;
        console.log(`The Ticket Price is: ${ticket}`);
    }
} else {
    ticket = ticket_price;
    console.log(`The Ticket Price is: ${ticket}`);
}
