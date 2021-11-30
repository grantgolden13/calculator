const add = function(num1, num2) {
    return num1 + num2;
}

const subtract = function(num1, num2) {
    return num1 - num2;
}

const multiply = function(num1, num2) {
    return num1 * num2;
}

const divide = function(num1, num2) {
    return num1 / num2;
}

const operate = function(num1, num2, operator) {
    return operator(num1, num2);
}

let numberButtons = Array.from(document.getElementsByClassName("cell"));
let display = document.querySelector('.display');

let clearButton = document.querySelector('.clear');

numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let value = e.target.childNodes[0].nodeValue;
        helperFunction(value);
    });
});

const helperFunction = function(value) {
    if (value == '+/-') {
        if (Math.sign(display.textContent) == -1) {
            display.textContent = Math.abs(display.textContent)
        } else {
            display.textContent = -Math.abs(display.textContent);
        }
    } else if (value == "AC") {
        display.textContent = '';
    } else if (isNaN(value) == true) {
        display.textContent += value;
    } else if (value) {
        display.textContent += value;
        arg1 = value;
    }
}