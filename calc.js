
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    return "Cannot divide by zero!";
  }
  
  return ((a % b) + b) % b;
}


let firstNumber = '';
let operator = '';
let secondNumber = '';
let result = '';
let previousInput = '';


function operate (num1, logic, num2) {
if (logic === '+') {
  return add (+num1, +num2);

} else if (logic === '-'){
  return subtract(+num1, +num2);

} else if (logic === 'x'){
  return multiply (+num1, +num2)

} else if (logic === '/') {
  if (+num2 === 0) {
    return "Cannot divide by zero!";
  }
  return divide(+num1, +num2)

} else if (logic === '%'){
  return modulo(+num1, +num2)
}
  else {return "Unsupported operator!";}

}

let display = document.querySelector('.display');
let displayTxt = display.querySelector('p');
// let smallerDisplay = document.querySelector('p.smldsply');
let buttonsContainer = document.querySelector('.containerbtns');
let buttons = Array.from(buttonsContainer.querySelectorAll('button'));


let displayValue = '';

function numberButtonClicked(number) {
    if (['+', '-', 'x', '/', '%'].includes(number) && operator !== '') {
    // previousInput = firstNumber + operator + secondNumber;
    // smallerDisplay.textContent = previousInput;
      
    result = operate(firstNumber, operator, secondNumber);
    operator = number;
    displayValue = result + operator;
    firstNumber = result;
    secondNumber = '';
   
  } else if ((number === '0' || parseInt(number)) && operator === ''){
   firstNumber += number;
   displayValue = firstNumber;
  
  } else if (['+', '-', 'x', '/', '%'].includes(number)){
    operator = number;
    displayValue = firstNumber + operator;
    
  } else if ((number === '0' || parseInt(number)) && operator !== '') {
    secondNumber += number;
    displayValue = firstNumber + operator + secondNumber;
  } else if (number === '=') {
   result = operate (firstNumber, operator, secondNumber);
   displayValue = result;

  } else if (number === '.') {
  if (operator === '') {
    if (firstNumber.includes('.')) {
      return; 
    }
    firstNumber += number;
    displayValue = firstNumber;
  } else {
    if (secondNumber.includes('.')) {
      return; 
    }
    secondNumber += number;
    displayValue = firstNumber + operator + secondNumber;
  }
} else if (number === 'Clear') {
  displayValue = clear()

  }
  updateDisplay();
} 

function updateDisplay() {
  displayTxt.textContent = displayValue;
  
}


function clear () {
 displayValue = '';
 firstNumber = '';
 secondNumber = '';
 operator = '';
 result = '';
 // previousInput = '';
}

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const number = button.value;
    numberButtonClicked(number);
  });
});
