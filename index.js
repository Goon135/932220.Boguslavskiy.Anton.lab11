let currentInput = "";
        let lastOperatorIndex = -1;  // Индекс последнего оператора

        // Функция для добавления цифры
        function appendNumber(number) {
            currentInput += number;  // Добавляем цифру в конец строки
            updateDisplay();
        }

        // Функция для добавления точки (десятичной запятой)
        function appendComma() {
            currentInput += '.';  // Добавляем точку в конец строки
            updateDisplay();
        }

        // Функция для добавления оператора
        function appendOperator(operator) {
            // Запоминаем индекс последнего оператора, чтобы отделить текущую часть числа
            lastOperatorIndex = currentInput.length;
            currentInput += operator;  // Добавляем оператор в конец строки
            updateDisplay();
        }

        // Функция для удаления последнего введенного символа
        function deleteLast() {
            currentInput = currentInput.slice(0, -1);
            updateDisplay();
        }

        // Функция для очистки экрана
        function clearDisplay() {
            currentInput = "";
            lastOperatorIndex = -1;  // Сбросим индекс последнего оператора
            updateDisplay();
        }

        // Функция для вычисления результата
        function calculateResult() {
            try {
                currentInput = eval(currentInput).toString();
                lastOperatorIndex = -1;  // Очистим индекс последнего оператора после вычисления
                updateDisplay();
            } catch (error) {
                currentInput = 'Ошибка';
                updateDisplay();
            }
        }

        // Функция для обновления дисплея
        function updateDisplay() {
            let displayContent = '';
            let currentNumber = '';
            let previousInput = '';

            // Если есть оператор, разделим строку на два блока
            if (lastOperatorIndex !== -1) {
                currentNumber = currentInput.slice(lastOperatorIndex + 2);  // Число после последнего оператора
                previousInput = currentInput.slice(0, lastOperatorIndex + 2);  // Все до последнего оператора
            } else {
                currentNumber = currentInput;  // Все - это текущее число
            }

            // Добавляем текущий номер с цветом и отступами
            displayContent += `<span class="current-number">${currentNumber}</span>`;

            // Добавляем оставшуюся часть (если есть), делаем ее полупрозрачной
            if (previousInput) {
                displayContent = `<span class="previous-input">${previousInput}</span>` + displayContent;
            }

            document.getElementById('display').innerHTML = displayContent;  // Обновляем содержимое div
        }