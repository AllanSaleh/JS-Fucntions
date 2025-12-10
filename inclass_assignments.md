# Lesson 2: In-Class Assignments

## Integrated Practice Sessions

These assignments are designed to be completed during the lesson as you learn each concept, rather than all at the end.

## Assignment 1: Function Basics (10 minutes)

### Objective
Practice creating different types of functions and understanding their syntax.

### Instructions
1. Add this code to your existing JavaScript file:

```javascript
// 1. Create a function declaration that calculates the area of a rectangle


// 2. Create a function expression that calculates the perimeter


// 3. Create an arrow function that calculates the diagonal


// 4. Test all functions
let length = 5;
let width = 3;

console.log("=== Rectangle Calculations ===");
console.log(`Length: ${length}, Width: ${width}`);
console.log(`Area: ${calculateArea(length, width)}`);
console.log(`Perimeter: ${calculatePerimeter(length, width)}`);
console.log(`Diagonal: ${calculateDiagonal(length, width).toFixed(2)}`);
```

### Expected Output
Your console should display:
- Length and width values
- Calculated area
- Calculated perimeter
- Calculated diagonal (rounded to 2 decimal places)

### Success Criteria
- [ ] Function declaration works correctly
- [ ] Function expression works correctly
- [ ] Arrow function works correctly
- [ ] All calculations are accurate
- [ ] Output is clearly formatted

---


## Assignment 2: Decision Making (10 minutes)

### Objective
Practice using conditional statements to make decisions in your code.

### Instructions
1. Add this code to your existing JavaScript file:

```javascript
// 1. Create a function that determines if a number is positive, negative, or zero
function checkNumber(number) {
    // Your code here
}

// 2. Create a function that determines the season based on month
function getSeason(month) {
    // Your code here
}

// 3. Create a function that calculates discount based on age
function calculateDiscount(age, price) {
    // Your code here
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
```

### Expected Output
Your console should display:
- Number classification results
- Season determination results
- Discount calculation results

### Success Criteria
- [ ] Number classification works for all cases
- [ ] Season determination works for all months
- [ ] Discount calculation works for all age groups
- [ ] All output matches expected results

---
