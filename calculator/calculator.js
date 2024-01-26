let currentInput = '';
    let currentOperation = null;
    let currentTotal = null;

    function appendToDisplay(value) {
      currentInput += value;
      document.getElementById('output').textContent = currentInput;
    }

    function clearDisplay() {
      currentInput = '';
      currentTotal = null;
      currentOperation = null;
      document.getElementById('output').textContent = '0';
    }

    function performOperation(operation) {
      if (currentTotal === null) {
        currentTotal = parseFloat(currentInput);
      } else {
        applyOperation();
      }
      currentInput = '';
      currentOperation = operation;
    }

    function applyOperation() {
      const inputValue = parseFloat(currentInput);
      switch (currentOperation) {
        case '+':
          currentTotal += inputValue;
          break;
        case '-':
          currentTotal -= inputValue;
          break;
        case '*':
          currentTotal *= inputValue;
          break;
        case '/':
          currentTotal /= inputValue;
          break;
      }
      document.getElementById('output').textContent = currentTotal;
    }

    function calculateResult() {
      if (currentOperation !== null) {
        applyOperation();
        currentOperation = null;
        currentInput = currentTotal.toString();
      }
    }