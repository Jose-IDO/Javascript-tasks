console.log("EXCERCISE 1");
let temperature = 20;

if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");
} else if (temperature > 25) {
    console.log("It's warm.");
}

switch (true) {
    case (temperature < 0):
        console.log("It's freezing!");
        break;
    case (temperature >= 0 && temperature <= 15):
        console.log("It's cold.");
        break;
    case (temperature >= 16 && temperature <= 25):
        console.log("It's mild.");
        break;
    case (temperature > 25):
        console.log("It's warm.");
        break;
}
console.log("EXCERCISE 2");

let number = 12;

if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

switch (true) {
    case (number % 2 === 0 && number % 3 === 0):
        console.log("Divisible by both.");
        break;
    case (number % 2 === 0):
        console.log("Divisible by 2.");
        break;
    case (number % 3 === 0):
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
        break;
}

console.log("EXCERCISE 3");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum of numbers from 1 to 100:", sum);

console.log("EXCERCISE 4");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum of numbers from 1 to 100:", sum);

for (let i = 1; i < 50; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

console.log("EXCERCISE 5");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum of numbers from 1 to 100:", sum);

let userInput;
do {
    userInput = parseInt(prompt("Enter a number greater than 10: "), 10);
} while (isNaN(userInput) || userInput <= 10);
console.log("You entered a valid number:", userInput);

const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
    guess = parseInt(prompt("Guess a number between 1 and 10: "), 10);
    if (guess !== correctNumber) {
        console.log("Wrong guess, try again!");
    }
} while (guess !== correctNumber);
console.log("Congratulations! You guessed the correct number:", correctNumber);


