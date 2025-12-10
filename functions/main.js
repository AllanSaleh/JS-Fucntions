console.log("Hello");
console.log(firstFunc());

// Function Declaration (hoisted)
function firstFunc(){
    return "Hello World!";
};



// parameters (functions variables)

function greet(name, lastName){
    return `Hello ${name} ${lastName}`;
};

console.log(greet("Allan")); // Allan is the argument (Value I pass in for parameter 'name')
console.log(greet("Barnie", "Doe"));


// JS - First Citezen Programming Language
// function expressions (Not hoisted) -================ (More moderm way than declarations)

const greetExpressionFunc = function (name) {
    return `Hello ${name}!`
}

console.log(greetExpressionFunc("Sally"))


// Arrow function (Not hoisted) 

const greetArrow = (firstName, lastName) => {
    return `Hello ${firstName} ${lastName}!`
}

console.log(greetArrow("Brian", "O'Connor"))

const greet2 = name => `Hello ${name}`;

console.log(greet2("Bob"))



console.log(student)

var student = "Bill"