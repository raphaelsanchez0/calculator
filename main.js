window.addEventListener("load", ()=>{
    const numBtns = document.querySelectorAll(".number");
    const operatorBtns = document.querySelectorAll(".operator")
    
    const addBtn = document.querySelector("#plus");
    const subtractBtn = document.querySelector("#minus");
    const multiplyBtn = document.querySelector("#multiply");
    const divideBtn = document.querySelector("#divide");
    
    


    const plusbtn = document.querySelector("#plus");

    let currentStringValue = ""
    let currentNumValue = 0;
    let previousNumValue =0;

    const currentValueView = document.querySelector(".currentValue")

    operatorPressed = false;
    

    

    

    for(let i = 0; i < numBtns.length;i++){
        numBtns[i].addEventListener("click",()=>{
            let pressedNum =numBtns[i].value
            if(!operatorPressed){
                currentStringValue+=pressedNum;
                updateUIcurrentValue(pressedNum)
            }else{
                updateUIcurrentValue(pressedNum)

            }
            
        })
    }

    for(let i=0; i<operatorBtns.length;i++){
        operatorBtns[i].addEventListener("click",()=>{
            previousNumValue = currentNumValue;
            operatorPressed = true;

        })
    }

    function updateUIcurrentValue(updatedValye){
        currentValueView.innerHTML = updatedValye;
        currentNumValue = Number(currentStringValue)
    }

    function add(a,b){
        return a+b;
    }

    function subtract(a,b){
        return a-b;
    }
    function multiply(a,b){
        return a*b
    }
    function divide(a,b){
        return a/b;
    }


    
    
})