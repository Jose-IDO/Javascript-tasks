function personalInfo() {
    let name = "Joseph Idowu";
    let age = 29;
    let isstudent = false;
    return { name, age, isstudent };
}

let { name, age, isstudent } = personalInfo();
console.log(name);
console.log(age);
console.log(isstudent);

function favoritecolor() {
    let color = "Swiss blue Topaz";
    return color;
}

let color = favoritecolor();
console.log(color, "it reminds me of the ocean");

function calculationoperation(num1, num2) {
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num1 / num2;
    return { sum, difference, product, quotient };
}

let first = 5;
let second = 10;
let { sum, difference, product, quotient } = calculationoperation(first, second);
console.log(sum, difference, product, quotient);
