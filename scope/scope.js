let globalVar = "I am a global variable"

const scopeDemo = () => {
    let functionVar = "I'm a funciton variable"

    if (true){
        let blockVariable = "I'm a block variable"
        console.log(globalVar)
        console.log(functionVar)
        console.log(blockVariable)
    }
    console.log(functionVar)
    // console.log(blockVariable) Cannot be accessed outside the block it was defined in
}

scopeDemo()
console.log(globalVar)
// console.log(functionVar) Cannot be accessed outside the block it was defined in