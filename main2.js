window.addEventListener("load", () => {
    const numBtns = document.querySelectorAll(".number");
    const operatorBtns = document.querySelectorAll(".operator")

    const addBtn = document.querySelector("#plus");
    const subtractBtn = document.querySelector("#minus");
    const multiplyBtn = document.querySelector("#multiply");
    const divideBtn = document.querySelector("#divide");

    let currentStringValue = ""
    let currentNumValue = 0;
    let previousNumValue = 0;

    let currentOperation = "+";

    const currentValueView = document.querySelector(".currentValue")

    operatorPressed = false;






    for (let i = 0; i < numBtns.length; i++) {
        numBtns[i].addEventListener("click", () => {
            let pressedNum = numBtns[i].value
            if (!operatorPressed) {
                currentStringValue = currentValueView.innerHTML;
                currentStringValue += pressedNum;

                currentValueView.innerHTML = currentStringValue;


            } else {
                currentNumValue = Number(currentStringValue);
                previousNumValue = currentNumValue;
                //currentNumValue = 0;
                currentValueView.innerHTML = pressedNum;
                operatorPressed = false;


            }

        })
    }

    for (let i = 0; i < operatorBtns.length; i++) {
        operatorBtns[i].addEventListener("click", () => {
            currentNumValue = Number(currentValueView.innerHTML)
            currentValueView.innerHTML = "";
            operatorPressed = true;
            currentOperation = operatorBtns[i].value;
            switch (currentOperation) {
                case '+':
                    currentNumValue = add(currentNumValue, previousNumValue)
                    break;
                case '-':
                    currentNumValue = subtract(currentNumValue, previousNumValue)
                    break;
                case '*':
                    currentNumValue = multiply(currentNumValue, previousNumValue)
                    break;
                case '/':
                    currentNumValue = divide(currentNumValue, previousNumValue)
                    break;
            }
            //previousNumValue = currentNumValue;
            currentValueView.innerHTML = currentNumValue;

        })
    }

    function updateUIcurrentValue(updatedValue, resetNumber) {

        if (resetNumber) {
            previousNumValue = currentNumValue;
            currentValueView.innerHTML = "";
        } else {
            currentValueView.innerHTML = currentStringValue;
            currentNumValue = Number(currentStringValue)
        }

    }

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }
    function multiply(a, b) {
        return a * b
    }
    function divide(a, b) {
        return a / b;
    }




})