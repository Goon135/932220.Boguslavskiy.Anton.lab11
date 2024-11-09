let currentInput = "";
        let lastOperatorIndex = -1; 

    
        function appendNumber(number) {
            currentInput += number;
            updateDisplay();
        }

      
        function appendComma() {
 
            if (currentInput.indexOf('.') === -1 || !currentInput.slice(lastOperatorIndex + 1).includes('.')) {
                currentInput += '.';  
                updateDisplay();
            }
        }

     
        function appendOperator(operator) {
         
            lastOperatorIndex = currentInput.length;
            currentInput += operator; 
            updateDisplay();
        }

       
        function deleteLast() {
            currentInput = currentInput.slice(0, -1);
            updateDisplay();
        }

       
        function clearDisplay() {
            currentInput = "";
            lastOperatorIndex = -1;  
            updateDisplay();
        }

      
        function calculateResult() {
            try {
                currentInput = eval(currentInput).toString();
                lastOperatorIndex = -1;  
                updateDisplay();
            } catch (error) {
                currentInput = 'Ошибка';
                updateDisplay();
            }
        }

      
        function updateDisplay() {
            let displayContent = '';
            let currentNumber = '';
            let previousInput = '';

        
            if (lastOperatorIndex !== -1) {
                currentNumber = currentInput.slice(lastOperatorIndex + 1);  
                previousInput = currentInput.slice(0, lastOperatorIndex + 1);  
            } else {
                currentNumber = currentInput;  
            }

          
            displayContent += `<span class="current-number">${currentNumber}</span>`;

         
            if (previousInput) {
                displayContent = `<span class="previous-input">${previousInput}</span>` + displayContent;
            }

            document.getElementById('display').innerHTML = displayContent;  
        }