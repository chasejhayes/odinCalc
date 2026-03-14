const add = function(a,b){
    return a+b;
}

const subtract = function(a,b){
    return a-b;
}

const multiply = function(a,b){
    return a*b;
}

const divide = function(a,b){
    return a / b;
}

let initialNumber;
let secondaryNumber;
let operator;

const operate = function(firstNumber, secondNumber, operator){
    if (operator == "+"){
        add(firstNumber, secondNumber)
    } else if (operator == "-"){
        subtract(firstNumber, secondNumber)
    } else if (operator == "*"){
        multiply(firstNumber, secondNumber)
    } else if (operator == "/"){
        divide(firstNumber, secondNumber)
    }

}