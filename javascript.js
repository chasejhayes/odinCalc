const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}


let initialNumber = "__";
let secondaryNumber = "__";
let operator = "__";
let result;

const jsInitialNumber = document.querySelector("#initial");
jsInitialNumber.textContent = initialNumber;

const jsOperator = document.querySelector("#operator");
jsOperator.textContent = operator;

const jsSecondaryNumber = document.querySelector("#secondary");
jsSecondaryNumber.textContent = secondaryNumber;

const jsResult = document.querySelector("#result");
jsResult.textContent = result;


function clickPlus() {
    return jsOperator.textContent = "+"
}

function clickMinus(){
    return jsOperator.textContent = "-"
}

function clickMultiply(){
    return jsOperator.textContent = "x"
}

function clickDivide(){
    return jsOperator.textContent = "/"
}




const operate = function (firstNumber, secondNumber, operator) {
    if (operator == "+") {
        add(firstNumber, secondNumber)
    } else if (operator == "-") {
        subtract(firstNumber, secondNumber)
    } else if (operator == "*") {
        multiply(firstNumber, secondNumber)
    } else if (operator == "/") {
        divide(firstNumber, secondNumber)
    }

}










// make 3 display numbers
// make display each number "text content" = to initial/secondary/operator value
// make function that assigns clicked button to above value