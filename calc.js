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
  
  let firstNumber = '';
  let operator = '';
  let secondNumber = '';
  
  function operate(firstNumber, operator, secondNumber) {
    if (operator === '+') {
      return add(+firstNumber, +secondNumber);
    } else if (operator === '-') {
      return subtract(+firstNumber, +secondNumber);
    } else if (operator === 'x') {
      return multiply(+firstNumber, +secondNumber);
    } else if (operator === '/') {
      if (+secondNumber === 0) {
        return 'Cannot divide by zero';
      }
      return divide(+firstNumber, +secondNumber);
    } else {
      return 'Invalid operator';
    }
  }
  
  let currentDisplayValue = 0;
  
  let btnContainer = document.querySelector('.containerbtns');
  let display = document.querySelector('.displayctn');
  let dsplyText = display.querySelector('p');
  let buttons = Array.from(btnContainer.querySelectorAll('button'));
  
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      if (!isNaN(parseInt(button.value)) && operator === '') {
        const clickedNumber = button.value;
        currentDisplayValue = clickedNumber;
        firstNumber += currentDisplayValue;
        dsplyText.textContent = firstNumber;
      } else if (['+', '-', 'x', '/'].includes(button.value)) {
        operator = button.value;
        dsplyText.textContent = firstNumber + operator;
      } else if (!isNaN(parseInt(button.value))) {
        const clickedNumber = button.value;
        currentDisplayValue = clickedNumber;
        secondNumber += currentDisplayValue;
        dsplyText.textContent = firstNumber + operator + secondNumber;
      } else if (button.value === '=') {
        if (firstNumber && operator && secondNumber) {
          let result = operate(firstNumber, operator, secondNumber);
          dsplyText.textContent = result;
          firstNumber = result;
          operator = '';
          secondNumber = '';
        }
      } else if (button.value === 'Clear') {
        clear();
      }
    });
  });
  
  function clear() {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    dsplyText.textContent = '';
  }
  