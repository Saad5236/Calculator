let expression = "";
let screen = document.querySelector(".calculatorScreen");

let zero = document.querySelector("#zero");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");

let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");

let point = document.querySelector("#pointDot");

let clear = document.querySelector("#clear");
let allClear = document.querySelector("#allClear");
let exponent = document.querySelector("#exponent");
let sqrt = document.querySelector("#sqrt");


zero.addEventListener('click', () => {
    screen.value += 0;
})
one.addEventListener('click', () => {
    screen.value += 1;
})
two.addEventListener('click', () => {
    screen.value += 2;
})
three.addEventListener('click', () => {
    screen.value += 3;
})
four.addEventListener('click', () => {
    screen.value += 4;
})
five.addEventListener('click', () => {
    screen.value += 5;
})
six.addEventListener('click', () => {
    screen.value += 6;
})
seven.addEventListener('click', () => {
    screen.value += 7;
})
eight.addEventListener('click', () => {
    screen.value += 8;
})
nine.addEventListener('click', () => {
    screen.value += 9;
})



plus.addEventListener('click', () => {
    screen.value += '+';
})
minus.addEventListener('click', () => {
    screen.value += '-';
})
multiply.addEventListener('click', () => {
    screen.value += '*';
})
divide.addEventListener('click', () => {
    screen.value += '/';
})
exponent.addEventListener('click', () => {
    screen.value += '**';
})



point.addEventListener('click', () => {
    screen.value += '.';
})



clear.addEventListener('click', () => {
    expression = screen.value;
    expression = expression.replace(expression[expression.length - 1], '');
    screen.value = expression;
})
allClear.addEventListener('click', () => {
    screen.value = "";
})



equal.addEventListener('click', () => {
    expression = screen.value;
    screen.value = eval(expression);
    checkExpression();
})

function checkExpression() {
    if (expression[0] == '*' || expression[0] == '/') {
        alert("Wrong expression");
    }

    if (expression[expression.length - 1] == '+' || expression[expression.length - 1] == '-' || expression[expression.length - 1] == '*' || expression[expression.length - 1] == '/') {
        alert("Wrong expression");
    }
}