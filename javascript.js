
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
// TO DO: consolidate like numbers functions
let plusSign = "+"
let minusSign = "-"
let multiplySign = "x"
let divideSign = "/"

function clickPlus() {
    return jsOperator.textContent = "+"
}
function storeValuePlus(valueToStore) {
    operator = valueToStore;
}

function clickMinus() {
    return jsOperator.textContent = "-"
}
function storeValueMinus(value) {
    operator = value
}

function clickMultiply() {
    return jsOperator.textContent = "x"
}
function storeValueMultiply(value) {
    operator = value
}

function clickDivide() {
    return jsOperator.textContent = "/"
}
function storeValueDivide(value) {
    operator = value
}

// number click

function initialClick(value) {
    return jsInitialNumber.textContent = numbers[value];

}
function secondaryClick(value) {
    if (initialNumber == true) {
        return jsSecondaryNumber.textContent = numbers[value];
    }
}
function storeInitialNumberValues(value) {
    initialNumber = value
    console.log(initialNumber)
}
function storeSecondaryNumberValues(value) {
    secondaryNumber = value;
    console.log(secondaryNumber)
}
let clickCount = 0;
function bigClick(value) {
    clickCount++
    if (clickCount == 1) {
        initialClick(value);
        storeInitialNumberValues(value)
    } else if (clickCount == 2) {
        secondaryClick(value);
        storeSecondaryNumberValues(value)
    }


}




// decides which math function to execute based on input
const operate = function (firstNumber, secondNumber, operator) {
    if (operator == "+") {
        return jsResult.textContent = add(firstNumber, secondNumber)
    } else if (operator == "-") {
        jsResult.textContent = subtract(firstNumber, secondNumber)
    } else if (operator == "x") {
        jsResult.textContent = multiply(firstNumber, secondNumber)
    } else if (operator == "/") {
        jsResult.textContent = divide(firstNumber, secondNumber)
    }

}

// problems:
// can only imput 1 digit numbers
// second digit doesn't appear when any number other than 1 is pressed

// COMPLETE clicking should open an array that stores all the numbers entered 
// pressing the operator sign should join that array together, turn it into a number, and store it in the initial variable
// it also should store the operator for the operation function
// after the operator has a value(op=true), clicking should fill a second array
// if the operator is pressed again and both values == true, then it runs the operate function and uses that number for the initial variable
// the equal sign runs the operate function and clears both initial and secondary variables

// but how do you display the numbers?
// do the "click counter" and have up to 5 numbers shown


let initialNumArr = [];
let secondNumArr = [];
let initialNum;
let secondNum;
let op;
let runningTotal;


// runs when button is clicked - value = button number
// only runs if the operator has not been assigned yet 
// pushes number into the initial number Array
function firstClick(value) {
    if (op == undefined) {
        console.log(initialNumArr)
        return initialNumArr.push(value)
    }

}


function secondClick(value) {
    if (op == "+" || op == "-" || op == "x" || op == "/"
    ) {
        console.log(secondNumArr)
        return secondNumArr.push(value)
    }
}

// runs when an operator is pressed
// makes initialNumArr into a single number value assigned to initialNum
// assigns the selected operator to value op (makes firstClick() stop working)
// if the secondNumArr is definited, join into a number and assign to secondNum
// if we have a first number and a second number

function operationPressed(operator) {
    if (op == undefined){
        initialNum = Number(initialNumArr.join(""));
    }
    op = operator;
    if (secondNumArr.length > 0){
        secondNum = Number(secondNumArr.join(""))
    }
    console.log(initialNum);
    console.log(secondNum);
    if (initialNum && secondNum){
        initialNum = operate(initialNum, secondNum, op);
        secondNumArr.length = 0;
        console.log(initialNum)

    }
}



// the easy thing is join array on the equal sign
// hard is 
// what exactly is happening here?
// get one number. joins when we get operator. get second number. operator pressed again
