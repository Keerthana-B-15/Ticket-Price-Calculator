# Ticket-Price-Calculator

This JavaScript program calculates the metro ticket price for passengers based on their age and gender. The program uses random values for age and initial ticket price and adjusts the ticket price according to specific conditions for male and female passengers.

## Features

- Randomly generates a passenger's age.
- Prompts the user to enter the passenger's gender.
- Randomly generates an initial ticket price.
- Adjusts the ticket price based on the following conditions:
  - For female passengers:
    - Free for ages under 5.
    - 50% of the initial price for ages 5-8 or over 65.
    - 50% of the initial price for other ages.
  - For male passengers:
    - Free for ages under 5.
    - 50% of the initial price for ages 5-8.
    - 30% of the initial price for ages over 65.
    - Full price for other ages.
  - For other genders, the ticket price remains unchanged.

## How to Use

1. Clone the repository or download the script.
2. Open the script in a web browser.
3. Enter the passenger's gender when prompted.
4. View the randomly generated age and initial ticket price in the console.
5. The adjusted ticket price will be displayed in the console based on the specified conditions.

## Example

When you run the program, you might see output similar to the following in the console:
Age: 45
Enter the passenger's gender: Female
Initial Ticket Price: 80
The Ticket Price is: 40

## Contributing

Feel free to fork this repository, submit issues, and send pull requests. Contributions are always welcome.
