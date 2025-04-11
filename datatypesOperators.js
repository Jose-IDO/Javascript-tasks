function mathesproblem(Q, T) {
    let sum = Q + T;
    let difference = Q - T;
    let product = Q * T;
    let quotient = Q / T; 
    let remainder = Q % T;
    let exponent = Q ** T;
    return [sum, difference, product, quotient, remainder, exponent];
}

let Q = 10;
let T = 5.35;
let [sum, difference, product, quotient, remainder, exponent] = mathesproblem(Q, T);

console.log("Maths problems are as follows:");
console.log("this is the sum", sum);
console.log("this is the difference", difference);
console.log("this is the product", product);
console.log("this is the quotient", quotient);
console.log("this is the remainder", remainder);
console.log("this is the exponent", exponent);

let A = 864856876;
let B = 564654654;

function Boolean(A, B) {
    let isequal = A === B;
    let isgreater = A > B;
    let isless = A < B;
    return [isequal, isgreater, isless];
}

let [isequal, isgreater, isless] = Boolean(A, B);
console.log("this is the isequal", isequal);   
console.log("this is the isgreater", isgreater);
console.log("this is the isless", isless);

let x = 8;
let y = 12;

function compareXY(x, y) {
    let isGreater = x > y;
    let isLessOrEqual = x <= y;
    let isEqual = x === y;
    let isNotEqual = x !== y;

    console.log("Comparison results for x and y:");
    console.log("Is x greater than y statement:", isGreater);
    console.log("Is x less than or equal to y statement:", isLessOrEqual);
    console.log("Is x equal to y statement:", isEqual);
    console.log("Is x not equal to y statement:", isNotEqual);
}

compareXY(x, y);

let a = true;
let b = false;

console.log("Logical operations results:");
console.log("a AND b:", a && b);
console.log("a OR b:", a || b);
console.log("NOT a:", !a);

let p = 10;

console.log("Initial value of p:", p);

p += 5;
console.log("After p += 5:", p);

p -= 3;
console.log("After p -= 3:", p);

p *= 2;
console.log("After p *= 2:", p);

p /= 4;
console.log("After p /= 4:", p);

p %= 3;
console.log("After p %= 3:", p);

