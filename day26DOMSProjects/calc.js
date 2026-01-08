 let currentInput = '';
    let previousInput = '';
    let operator = '';

    function appendNumber(num) {
      currentInput += num;
      updateDisplay(currentInput);
    }

    function setOperator(op) {
      // if (currentInput === '') return;
      operator = op;
      previousInput = currentInput;
      currentInput = '';
    }

    function calculate() {
      const a = parseFloat(previousInput);
      const b = parseFloat(currentInput);
      let result = 0;

      if (operator === '+') result = a + b;
      else if (operator === '-') result = a - b;
      else if (operator === '*') result = a * b;
      else if (operator === '/') result = b !== 0 ? parseFloat(a / b) : 'Err';

      currentInput = result.toString();
      previousInput = '';
      operator = '';
      updateDisplay(currentInput);
    }

    function updateDisplay(value) {
      document.getElementById('display').value = value;
    }