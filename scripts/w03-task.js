/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers () {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);

    return document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const substract = function (number1, number2) {
    return number1 - number2
}

const substractNumbers = function () {
    let substractNumber1 = Number(document.querySelector("#subtract1").value);
    let substractNumber2 = Number(document.querySelector("#subtract2").value);

    return document.querySelector("#difference").value = substract(substractNumber1, substractNumber2);
}

document.querySelector("#subtractNumbers").addEventListener("click", substractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector("#factor1").value);
    let multiplyNumber2 = Number(document.querySelector("#factor2").value);

    return document.querySelector("#product").value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide (number1, number2) {
    return number1 / number2;
}

function divideNumbers () {
    let divideNumber1 = Number(document.querySelector("#dividend").value);
    let divideNumber2 = Number(document.querySelector("#divisor").value);

    return document.querySelector("#quotient").value = divide(divideNumber1, divideNumber2);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

document.querySelector("#year").innerHTML = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").innerHTML = array;

/* Output Odds Only Array */
let oddsArray = array.filter(number => number % 2 === 1);
document.querySelector("#odds").innerHTML = oddsArray;

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = array.filter(number => number % 2 == 0);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = array.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
let multipliedArray = array.map(number => number * 2);
document.querySelector("#multiplied").innerHTML = multipliedArray

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = multipliedArray.reduce((sum, number) => sum + number);
