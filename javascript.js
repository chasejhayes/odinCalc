
// used in onClick to select an operator
let plusSign = "+"
let minusSign = "-"
let multiplySign = "x"
let divideSign = "/"

// display values for text changing
const jsInitialNumber = document.querySelector("#initial");

const jsOperator = document.querySelector("#operator");

const jsSecondaryNumber = document.querySelector("#secondary");

const jsResult = document.querySelector("#result");

jsResult.textContent = "Enter num";


function displayNum() {
    if (op1 == undefined) {
        jsResult.textContent = Number(initialNumArr.join(""))
    }
}

function displayOp() {
    if (initialNumArr !== undefined) {
        jsResult.textContent = op1;
    }
}

function displayNum2() {
    if (op1 !== undefined){
        jsResult.textContent = Number(secondNumArr.join(""))
        console.log(initialNumArr)
        console.log(secondNumArr)
    }
}

let initialNumArr = [];
let secondNumArr = [];
let initialNum;
let secondNum;
let op1;
let op2;



// onClick event assigned to all numbers
// does not work if operator is assigned
// puts all numbers clicked into initialNumArr
function getFirstNum(value) {
    window.location.reload()
    if (op1 == undefined) {
        return initialNumArr.push(value)
    }
}

// onClick event assigned to all numbers
// only works if operator is assigned
// put all numbers clicked into secondNumArr
function getSecondNum(value) {
    if (op1 == "+" || op1 == "-" || op1 == "x" || op1 == "/"
    ) {
        return secondNumArr.push(value)
    }
}



// math functions
// used in the operation function
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
    if (b==0 || b=="0"){
        return "ERROR. PRESS CLEAR."
    } else {
        return a / b;
    }
}

// decides which math function to execute based on operator, takes firstNumber and secondNumber as arguments
// returns result as text content
const operate = function (firstNumber, secondNumber, operator) {
    if (operator == "+") {
        return jsResult.textContent = add(firstNumber, secondNumber)
    } else if (operator == "-") {
        return jsResult.textContent = subtract(firstNumber, secondNumber)
    } else if (operator == "x") {
        return jsResult.textContent = multiply(firstNumber, secondNumber)
    } else if (operator == "/") {
        return jsResult.textContent = divide(firstNumber, secondNumber)
    }

}

// onClick event assigned to operator
// on first press - when op1 is still undefined - assigns the initialNumArr into a Number stored in initialNum; assigns the operator to op1; is ignored when pressed again
// assigns the selected operator to value op2 (makes getFirstNum() stop working)
// if the secondNumArr is defined, join into a number and assign to secondNum
// if both are defined perform the operation function and assign result to initialNum; uses the first operator pressed
// set the second number array to 0 so it can be filled again
// assigns the second operator pressed to be the new primary operator

// jsInitialNumber.textContent = Number(initialNumArr.join(""));

function operationPressed(operator) {
    if (op1 == undefined) {
        initialNum = Number(initialNumArr.join(""));
        op1 = operator;

    }
    op2 = operator;
    if (secondNumArr.length > 0) {
        secondNum = Number(secondNumArr.join(""))
        console.log(secondNum)
    }
    if (initialNum !== undefined && secondNum !== undefined) {
        initialNum = operate(initialNum, secondNum, op1);
        secondNumArr.length = 0;
        console.log(initialNum)
    }
    op1 = op2;
}




function errorMessage() {
    return "ERROR. PRESS CLEAR"
}



// equal sign: returns result of operation
function equals() {
    operationPressed(op1)
    secondNumArr.length = 0;
    secondNum = false;
    if (typeof initialNum === "number") {
        jsResult.textContent = initialNum.toFixed(2);
    } else {
        jsResult.textContent = initialNum; // shows error message
    }

}
