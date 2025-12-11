console.log("Loops")

//    start     stop  step
for (let i = 0; i < 10; i+=2){
    console.log(i)
}

const fruits = ["apple", "pear", "tomato"]

for(let i = 0; i < fruits.length; i++){
    console.log(i, fruits[i]);
}

let counter = 10;
while (counter > 0){
    console.log(counter);
    counter--;
}

do{
    console.log("in do while")
}while(false);

while (false){
    console.log("in while")
}