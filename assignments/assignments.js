// 1. Create a function declaration that calculates the area of a rectangle
function calculateArea(length, width){
    return length * width;
};

// 2. Create a function expression that calculates the perimeter
const calculatePerimeter = function(length, width) {
    return 2 * (length + width);
}

// 3. Create an arrow function that calculates the diagonal
// const calculateDiagonal = (length, width) => {
//     return Math.sqrt(length ** 2 + width ** 2);
// };

const calculateDiagonal = (length, width) => (length ** 2 + width ** 2) ** 0.5;

// 4. Test all functions
let length = 5;
let width = 3;

console.log("=== Rectangle Calculations ===");
console.log(`Length: ${length}, Width: ${width}`);
console.log(`Area: ${calculateArea(length, width)}`);
console.log(`Perimeter: ${calculatePerimeter(length, width)}`);
console.log(`Diagonal: ${calculateDiagonal(length, width).toFixed(2)}`);


// Asinment 2 ======================

// 1. Create a function that determines if a number is positive, negative, or zero
function checkNumber(number) {
    if (number > 0){
        return "Positive";
    } else if (number < 0 ) {
        return "Negative";
    } else{
        return "Zero";
    };
};

// 2. Create a function that determines the season based on month
function getSeason(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            return "Winter";
        case 3:
        case 4:
        case 5:
            return "Spring";
        case 6:
        case 7:
        case 8:
            return "Summer";
        case 9:
        case 10:
        case 11:
            return "Fall";
        default:
            return "Nice Try, not a seasonal month";
    }
}

// function getSeason(month) {
//     if (month >= 3 && month <= 5) {
//         return "Spring";
//     } else if (month >= 6 && month <= 8) {
//         return "Summer";
//     } else if (month >= 9 && month <= 11) {
//         return "Fall";
//     } else {
//         return "Winter";
//     }
// }

// 3. Create a function that calculates discount based on age
// function calculateDiscount(age, price) {
//     if (age <= 18){
//         return price - 10;
//     } else if (age >= 65){
//         return price - 20;
//     } else return price;
// }

// function calculateDiscount(age, price) {
//      if (0 <= age && age <= 18){
//         return 10 * price / 100;
//      } else if (age >= 65) {
//         return 20 * price / 100;
//      } else{
//         return 0;
//      };
// };

function getSeason(month){
    switch (true) {
        case month >= 3 && month <= 5:
            return "Spring";
        case month >= 6 && month <= 8:
            return "Summer";
        case month >= 9 && month <= 11:
            return "Fall"; 
        case month === 12 || month === 1 || month === 2:
            return "Winter"; }
}



// 4. Test all functions
console.log("=== Decision Making Practice ===");
console.log("Number check:", checkNumber(5)); // Should be "Positive"
console.log("Number check:", checkNumber(-3)); // Should be "Negative"
console.log("Number check:", checkNumber(0)); // Should be "Zero"

console.log("Season check:", getSeason(6)); // Should be "Summer"
console.log("Season check:", getSeason(12)); // Should be "Winter"

console.log("Discount for 16-year-old, $100:", calculateDiscount(16, 100)); // Should be 10
console.log("Discount for 70-year-old, $100:", calculateDiscount(70, 100)); // Should be 20
console.log("Discount for 30-year-old, $100:", calculateDiscount(30, 100)); // Should be 0