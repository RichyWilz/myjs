
let messageEl = document.getElementById("message")
let hasblackjack = false
let isAlive = false
let sumEl = document.querySelector("#sum")
let cardsEl = document.getElementById("cards")
let cards = []
let sum = 0
// let firstCard = 0
// let secondCard = 0
// let thirdCard = 0
// let randomNumber = Math.floor(Math.random()*6) + 1
// let sum = 0
let playerEL = document.querySelector(".player")

let gamer = {
    names: "Kaytri",
    chips: 200
}

playerEL.textContent = gamer.names + ": $" + gamer.chips


function randomCard(){
    let rCard = Math.floor(Math.random()*13) + 1
    if (rCard === 1){
        return 11
    }else if (rCard > 10){
        return 10
    }
    return rCard
}

function start(){
    isAlive = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    render()
}


function render(){
    cardsEl.textContent = "Cards: "
    for (let i=0; i< cards.length; i++){
         cardsEl.textContent += cards[i] + " " 
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        messageEl.textContent = "smaller,add another card" 
    }else if (sum ===  21){
        messageEl.textContent = "wow,blackjack it is"
        hasblackjack = true 
    }
    else {
        messageEl.textContent = "bigger,your out of the game"
        isAlive = false  
    }
}

function newcard(){
    if (isAlive === true  && hasblackjack === false){
        let thirdCard = randomCard()
        sum += thirdCard
        cards.push(thirdCard)
        render()
    }else{
        messageEl.textContent = "YOUR OUT OF THE GAME DEAR"
    }
}  