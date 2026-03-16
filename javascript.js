
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
    return a / b;
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
// on first press - when op1 is still undefined - assigns the initialNumArr into a Number stored in initialNum; is ignored when pressed again
// assigns the selected operator to value op1 (makes getFirstNum() stop working)
// if the secondNumArr is defined, join into a number and assign to secondNum
// if both are defined perform the operation function and assign result to initialNum
// set the second number array to 0 so it can be filled again

function operationPressed(operator) {
    if (op1 == undefined) {
        initialNum = Number(initialNumArr.join(""));
        console.log(initialNum);
        op1 = operator;
    }
    op2 = operator;
    if (secondNumArr.length > 0) {
        secondNum = Number(secondNumArr.join(""))
        console.log(secondNum)
    }
    if (initialNum && secondNum) {
        initialNum = operate(initialNum, secondNum, op1);
        secondNumArr.length = 0;
        console.log(initialNum)
    }
    op1 = op2;
}

// the bug:
// 

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







// function errorMessage() {
//     return "ERROR. PRESS CLEAR"
// }


// function equals() {
//     if (initialNum == undefined) {
//         return jsResult.textContent = errorMessage();
//     } else {
//         if (op1 == undefined) {
//             initialNum = Number(initialNumArr.join(""));
//         }
//         if (secondNumArr.length > 0) {
//             secondNum = Number(secondNumArr.join(""))
//         }
//         if (initialNum && secondNum) {
//             initialNum = operate(initialNum, secondNum, op1);
//             secondNumArr.length = 0;

//         }
//         op1 = undefined;

//         return jsResult.textContent = initialNum;
//     }
// }

// to do:
// from top to bottom, break down what each piece of code does
// write out in detail a specific bug
// write out in detail the logic path that is causing the bug
// fix the logic
// repeat until there are no more bugs 




// to do:
// make the equal sign work
// make the display update properly
// make the clear button
// go through and delete junk
// small odds and ends from instructions




// doesn't work yet
// function clear() {
//     return location.reload(true);
// }