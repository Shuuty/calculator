const currentOperation = document.querySelector(`.screen-show-operation`);
const operationResult = document.querySelector(`.screen-show-result`);
const allButtons = document.querySelectorAll(`.numAndOp`);
let operators = [`÷`, `★`, `+`, `-`]

let x = ``;
let y = ``;
let op = ``;
let opResult = ``;


//With this, when you touch a button, a value will appear

allButtons.forEach(button => {
    button.addEventListener(`click`, ()=> enterNumAndOp(button.textContent))
})



// Function to process the input value

function enterNumAndOp(entrance) {

    // Limit the number of `.`
    if(entrance === `.` && x.includes(`.`) && y == `` )return;
    if(entrance === `.` && y.includes(`.`) && op !== ``) return;
    
    console.log(entrance);
    if(currentOperation.textContent === 0) {
        currentOperation.textContent = ``;
    }

    // In case you want to use a result for another operation
    if(opResult !== ``) {
            operators.forEach(operator => {
                if(entrance !== operator) return;
                else if(entrance === operator){
                    x = ``;
                    y = ``;
                    op = ``;
                    x = opResult;
                    opResult = ``;
                }
            })

    }

    // Enter the operator
    operators.forEach(operator => {
        if(entrance === operator && op === ``){
            op = operator;
            console.log(`the op`+ op)
        } else return;
    })

    // Enter the fist number
    if(op === `` && y === ``) {
        x += entrance;
        console.log(x)
    }
    // Enter the second number
    else if(x !== `` && op !== `` && opResult == ``) {
        y += entrance;
        console.log(y)
    }
    operators.forEach(operator => {
        if(y.includes(operator)) {
           y = y.slice(1, -1)
        }
    })  


    // Show the operation
    currentOperation.textContent = `${x} ${op} ${y}`;
}

function clearAll() {
    currentOperation.textContent = 0;
    operationResult.textContent = 0;
    x = ``;
    y = ``;
    op = ``;
    opResult = ``;
}


// Clear the screen functions
function deleteLastOne() {
    if(x !== `` && op === ``) {
        x = x.slice(0, -1);
        currentOperation.textContent = `${x} ${op} ${y}`;

    }
    else if(x !== `` && op !== ``) {
        op = ``;  
        currentOperation.textContent = `${x} ${op} ${y}`; 
    }
    else if(x !== `` && op !== `` && y === ``) {
        y = y.slice(0, -1);
        currentOperation.textContent = `${x} ${op} ${y}`;
    }
     if(x === `` && op === ``) {
        currentOperation.textContent = 0; 
    }   
}

// Possible operations

function addition(x,y) {
     opResult = x*1 + y*1;
     opResult = Number(opResult.toFixed(3))
     return opResult
}

function subtract(x,y) {
    opResult = x - y;
    opResult = Number(opResult.toFixed(3))
    return opResult
}

function multiply(x,y) {
    opResult = x * y;
    opResult = Number(opResult.toFixed(3))
    return opResult
}

function divide(x,y) {
    opResult = x / y;
    opResult = Number(opResult.toFixed(3))
    return opResult
}

// Execution of the operation

function executeTheOperation() {
    if(operationResult === 0) {
        operationResult = 0;
    }
    switch(op) {
        case `+`:
            operationResult.textContent = addition(x, y);
            break;
        case `-`:
            operationResult.textContent = subtract(x,y);
            break;
        case `★`:
            operationResult.textContent = multiply(x,y);
            break;
        case `÷`:
            operationResult.textContent = divide(x,y);
            break;
    }


}