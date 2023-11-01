const resultElement = document.getElementById('result')
const input1 = document.getElementById('firstinput') 
const input2 = document.getElementById('secondinput')
const submit = document.getElementById('submit') 
const minusBtn = document.getElementById('minus')
const plusBtn = document.getElementById('plus')
let action = '+' 

minusBtn.onclick = function(){
    action = '-'
    console.log('minus')
}

plusBtn.onclick = function () {
    console.log('plus')
    action = '+'
}

function printResult (result) {
    if(result < 0){
        resultElement.style.color = 'red'
    } else if (result > 0 ) {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    // if(actionSymbol == '+'){
    //     return num1 + num2
    // }else if(actionSymbol == '-'){
    //     return num1 - num2
    // }
    return actionSymbol == '+' ? num1 + num2 : num1 - num2
}

submit.onclick = function(){
    const result = computeNumbersWithAction (input1, input2, action)
    printResult(result)
//     if(action == '+'){
//         const sum = Number(input1.value) + Number(input2.value)
//         printResult(sum)
//     } else if(action == '-') {
//         const sum = Number(input1.value) - Number(input2.value)
//         printResult(sum)
// }
}