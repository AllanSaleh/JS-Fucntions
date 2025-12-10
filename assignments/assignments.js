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