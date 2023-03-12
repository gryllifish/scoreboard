let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")

let nGame = document.getElementById("newGame")

let counterHome = 0
let counterAway = 0

homeScore.innerText = counterHome
guestScore.innerText = counterAway

function plusOne(){
    counterHome += 1
    homeScore.innerText = counterHome
    loser()
}
function plusTwo(){
    counterHome += 2
    homeScore.innerText = counterHome
    loser()
}
function plusThree(){
    counterHome += 3
    homeScore.innerText = counterHome
    loser()
}

function plusOneGuest(){
    counterAway += 1
    guestScore.innerText = counterAway
    loser()
}
function plusTwoGuest(){
    counterAway += 2
    guestScore.innerText = counterAway
    loser()
}
function plusThreeGuest(){
    counterAway += 3
    guestScore.innerText = counterAway
    loser()
}

/* Botón para reiniciar el contador */
function newGame(){
    counterHome = 0
    counterAway = 0 
    homeScore.innerText = 0
    guestScore.innerText = 0
    period.innerText = "1° CUARTO"
    count = 0
    loser()
}

function loser(){
    if (counterHome < counterAway){
        homeScore.classList.add("loser")
        guestScore.classList.remove("loser")
    }
    else if (counterHome > counterAway){
        guestScore.classList.add("loser")
        homeScore.classList.remove("loser")
    }
    else if (counterHome === counterAway){
        guestScore.classList.remove("loser")
        homeScore.classList.remove("loser")
    }
}

/* Botones de avance y retroceso de período */

let botonRetroceso = document.getElementById("miniButton")
let botonAvance = document.getElementById("second")

let period = document.getElementById("period")

let count = 0

function avance(){
    if (count === 3){
        return
    }
    if (count === 0){
        period.innerText = "2° CUARTO"
    }
    else if (count === 1){
        period.innerText = "3° CUARTO"
    }
    else if (count === 2){
        period.innerText = "4° CUARTO"
    }
    count += 1
}
function retroceso(){
    if (count === 0){
        return
    }
    if (count === 1){
        period.innerText = "1° CUARTO"
    }
    else if (count === 2){
        period.innerText = "2° CUARTO"
    }
    else if (count === 3){
        period.innerText = "3° CUARTO"
    }
    count -= 1
}