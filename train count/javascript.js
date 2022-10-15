

let counter = 0
let countEl = document.getElementById("count")


function increment(){
    counter += 1
    countEl.textContent = counter
}

let savedEl = document.getElementById("saved")

function save(){
    savedEl.textContent += counter + "-"
    counter = 0
    countEl.textContent = 0
}