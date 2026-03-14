
// math functions
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

// initial display values
let initialNumber = "__";
let secondaryNumber = "__";
let operator = "__";
let result;

// let one = "one";
// let two = "two"
// let three = "three"
// let four = "four"
// let five = "five";
// let six = "six";
// let seven = "seven";
// let eight = "eight";
// let nine = "nine";
// let zero = "zero"

// const numbers = {
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//     zero: 0,
// }

let one = 1;
let two = 2;
let three = 3;
let four = 4;
let five = 5;
let six = 6;
let seven = 7;
let eight = 8;
let nine = 9;
let zero = 0;

const numbers = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    0: 0,
}




// allows for initial display values to change
const jsInitialNumber = document.querySelector("#initial");
jsInitialNumber.textContent = initialNumber;

const jsOperator = document.querySelector("#operator");
jsOperator.textContent = operator;

const jsSecondaryNumber = document.querySelector("#secondary");
jsSecondaryNumber.textContent = secondaryNumber;

const jsResult = document.querySelector("#result");
jsResult.textContent = result;



// click operator functions and value storage

let plusSign = "+"
let minusSign = "-"
let multiplySign = "x"
let divideSign = "/"

function clickPlus() {
    return jsOperator.textContent = "+"
}
function storeValuePlus(valueToStore){
    operator = valueToStore;
}

function clickMinus(){
    return jsOperator.textContent = "-"
}
function storeValueMinus(value){
    operator = value
}

function clickMultiply(){
    return jsOperator.textContent = "x"
}
function storeValueMultiply(value){
    operator = value
}

function clickDivide(){
    return jsOperator.textContent = "/"
}
function storeValueDivide(value){
    operator = value
}

// number click

function initialClick(value){
    return jsInitialNumber.textContent = numbers[value];

}

function secondaryClick(value){
    if (initialNumber == true){
        return jsSecondaryNumber.textContent = numbers[value];
    } 
}

function storeInitialNumberValues(value){
    initialNumber = value
    console.log(initialNumber)
}

function storeSecondaryNumberValues(value){
    secondaryNumber = value;
    console.log(secondaryNumber)
}

let clickCount = 0;
function bigClick(value){
    clickCount++
    if (clickCount == 1){
        initialClick(value);
        storeInitialNumberValues(value)
    } else if (clickCount == 2){
        secondaryClick(value);
        storeSecondaryNumberValues(value)
    }
    

}




// decides which math function to execute based on input
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









