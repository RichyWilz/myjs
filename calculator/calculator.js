let num1 = 8
let num2 = 3

document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2

let sumEl = document.getElementById("answer")

function add(){
    sumEl.textContent = "Sum: " + (num1 + num2)

}


function subtract(){
    sumEl.textContent = "Sum: " + (num1 - num2)
}


function divide(){
    sumEl.textContent = "Sum: " + (num1 / num2)
}


function multiply(){
    sumEl.textContent = "Sum: " + (num1 * num2)
}