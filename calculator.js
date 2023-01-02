const calculator = {
    displayValue: '',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
}


function inputDigit(digit) {
    const {displayValue, waitingForSecondOperand} = calculator;
    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0.' ? digit : displayValue + digit;
    }
}

function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = "0."
        calculator.waitingForSecondOperand = false;
        return
    }
    if (!calculator.displayValue.includes(dot)){
        calculator.displayValue += dot;
    }
}

function handleOperator(nextOperator) {
    const {firstOperand, displayValue, operator} = calculator
    const inputValue = parseFloat(displayValue);
    if (operator && calculator .waitingForSecondOperand) {
        calculator.operator = nextOperator;
        return;
    }
    if (firstOperand == null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);
        calculator.displayValue = `${parseFloat(result.toFixed(13))}`;
        calculator.firstOperand = result;
    }
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
}

function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
        return firstOperand + secondOperand;
    } else if (operator === '-') {
        return firstOperand - secondOperand;
    } else if (operator === '*') {
        return firstOperand * secondOperand;
    } else if (operator === '/') {
        return firstOperand / secondOperand;
    } else if (operator === 'cos') {
        return Math.cos(secondOperand)
    } else if (operator === 'sin') {
        return Math.sin(secondOperand)
    }  else if (operator === 'tan') {
        return Math.tan(secondOperand)
    }
    return firstOperand;

}

function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
}

function updateDisplay() {
    const display = document.querySelector('.calculator-screen')
    display.value = calculator.displayValue
}

updateDisplay();
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', event => {
    const {target} = event;
    const {value} = target;
    if (!target.matches('button')) {
        return;
    }
    switch (value) {
        case '+' :
        case '-' :
        case '*' :
        case '/' :
        case 'cos':
        case 'sin':
        case 'tan':
        case '=' :
        handleOperator(value);
        break;
        case '.' :
            inputDecimal(value);
            break;
            case 'all-clear':
                resetCalculator();
                break;
                default:
            if (Number.isInteger(parseFloat(value))) {
                inputDigit(value);
            }
    }
    updateDisplay();
})