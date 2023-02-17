window.addEventListener("load", () => {
    const numBtns = document.querySelectorAll(".number");

    const operatorBtns = document.querySelectorAll(".operator")
    const addBtn = document.querySelector("#plus");
    const subtractBtn = document.querySelector("#minus");
    const multiplyBtn = document.querySelector("#multiply");
    const divideBtn = document.querySelector("#divide");

    const textResult = document.querySelector(".currentValue")

    const symbolBtns = document.querySelectorAll(".operator, .number")




    let calculation = ""

    function addtoCalculation(symbol) {
        calculation += str(symbol);
        textResult.innerHTML = calculation;

    }

    function evaluateCalculuation() {
        try {
            calculation = str(eval(calculation))
            textResult.innerHTML = calculation;
        } catch {
            clearField()
            textResult.innerHTML = "Error";
        }
    }

    function clearField() {
        calculation = ""
        textResult.innerHTML = calculation;
    }

    for (let i = 0; i < numBtns.length; i++) {
        let selectedNum = numBtns[i].value;
        addtoCalculation(addtoCalculation)
    }

    symbolBtns.forEach(symbol => {
        symbol.addEventListener("click", () => {
            addtoCalculation(symbol.value)
        })

    });

})