window.addEventListener("load", () => {


    const textResult = document.querySelector(".currentValue")

    const symbolBtns = document.querySelectorAll(".operator, .number")
    const equalBtn = document.querySelector("#equal")

    const clearBtn = document.querySelector("#c")

    const currentOperations = document.querySelector(".currentOperations")

    const plusMinus = document.querySelector("#plusminus")



    let calculation = ""

    function addtoCalculation(symbol) {
        calculation += symbol.toString();
        textResult.innerHTML = calculation;

    }

    function evaluateCalculuation() {
        try {
            let operations = calculation;
            calculation = (eval(calculation)) + "";
            textResult.innerHTML = calculation;
            currentOperations.innerHTML = operations;

        } catch {
            clearField()
            textResult.innerHTML = "Error";
        }
    }

    function clearField() {
        calculation = "";
        textResult.innerHTML = calculation;
        currentOperations.innerHTML = "";
        addtoCalculation(calculation)
    }

    function negate(num) {
        return -1 * num //negates number
    }


    symbolBtns.forEach(symbol => {
        symbol.addEventListener("click", () => {
            addtoCalculation(symbol.value)
            textResult.innerHTML = calculation;
        })
    });


    equalBtn.addEventListener("click", () => {
        evaluateCalculuation();
    })

    clearBtn.addEventListener("click", () => {
        clearField()
    })

    plusMinus.addEventListener("click", () => {
        textResult.innerHTML = negate(textResult.innerHTML)
    })



})