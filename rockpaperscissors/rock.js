let hands = ["rock", "paper", "scissor"]

function random(){
    let randomnum = Math.floor (Math.random()*3)
    return hands[randomnum]
} 

console.log(random())

let fruit = ["app", "molo", "app", "molo", "molo", "molo", "app"]

let orangeEL = document.querySelector(".orange")
let watermelonEL = document.querySelector(".watermelon")

function sorter(){
    for (let i = 0; i<fruit.length; i++){
        if (fruit[i] === "app"){
            orangeEL.textContent += fruit[i] + " "
        }else{
            watermelonEL.textContent += fruit[i] + " "
        }
    }
}

sorter()