console.log("Control Flow");

const bouncer = age => {
    if (age >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }
};

console.log(bouncer(20));

// else if

const letterGrader = score => {
    if (score >= 90){
        return 'A';
    } else if (score>=80){
        return 'B';
    } else if ( score >= 70){
        return 'C';
    } else {
        return 'F';
    };
};

console.log(letterGrader(75))

const getDayName = dayNumber => {
    switch(dayNumber) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid Day"
    }
}

console.log(getDayName(15))

// Ternary Operator (inline if statement)
// condition ? True output : False output

const getForcast = temp => {
    return temp >= 70 ? "Warm" : "Cold";
}

console.log(getForcast(50))

const getForcast2 = temp => temp >= 70 ? "Warm" : "Cold";

// Truthy and Falsey value (does or does not have value)

const checkTruthy = value => {
    if (value) {
        return "Truthy"
    } else {
        return "Falsey"
    }
}

console.log(checkTruthy([]))