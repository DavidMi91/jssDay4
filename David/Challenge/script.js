var player1 = "";
var player2 = "";
var attempts1 = 1;
var attempts2 = 1;


player1 = prompt("Enter Player1 name");
player2 = prompt("Enter player2 name");
document.getElementById("namePlayer1").innerHTML = player1;
document.getElementById("namePlayer2").innerHTML = player2;
document.getElementById("buttonPlayer1").addEventListener("click", checkAttempts1);
document.getElementById("buttonPlayer2").addEventListener("click", checkAttempts2);

// function lets player1 only roll once 
function checkAttempts1() {
    if (attempts1 == 1) {
        attempts1--;
        rollTheDice1();
    } else {
        alert("No attempts left.")
    }
}
// function lets player2 only roll once 
function checkAttempts2() {
    if (attempts2 == 1) {
        attempts2--;
        rollTheDice2();
    } else {
        alert("No attempts left.")
    }
}
// Function for player1's dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
function rollTheDice1() {
    checkRolls()
    if (randomNumber1 == 1) {
        document.getElementById("diceImg1").style.backgroundImage = "url('dice1.png')";
    } else if (randomNumber1 == 2) {
        document.getElementById("diceImg1").style.backgroundImage = "url('dice2.png')";
    } else if (randomNumber1 == 3) {
        document.getElementById("diceImg1").style.backgroundImage = "url('dice3.png')";
    } else if (randomNumber1 == 4) {
        document.getElementById("diceImg1").style.backgroundImage = "url('dice4.png')";
    } else if (randomNumber1 == 5) {
        document.getElementById("diceImg1").style.backgroundImage = "url('dice5.png')";
    } else if (randomNumber1 == 6) {
        document.getElementById("diceImg1").style.backgroundImage = "url('dice6.png')";
    }
}
// Function for player2's dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
function rollTheDice2() {
    checkRolls()
    if (randomNumber2 == 1) {
        document.getElementById("diceImg2").style.backgroundImage = "url('dice1.png')";
    } else if (randomNumber2 == 2) {
        document.getElementById("diceImg2").style.backgroundImage = "url('dice2.png')";
    } else if (randomNumber2 == 3) {
        document.getElementById("diceImg2").style.backgroundImage = "url('dice3.png')";
    } else if (randomNumber2 == 4) {
        document.getElementById("diceImg2").style.backgroundImage = "url('dice4.png')";
    } else if (randomNumber2 == 5) {
        document.getElementById("diceImg2").style.backgroundImage = "url('dice5.png')";
    } else if (randomNumber2 == 6) {
        document.getElementById("diceImg2").style.backgroundImage = "url('dice6.png')";
    }

}
// function checks if both players have rolled. if both players rolled already -> initiate result function
function checkRolls() {
    if (attempts1 == 0 && attempts2 == 0) {
        displayResult();
    } else {
        console.log("both players need to roll")
    }
}
// shows result: Draw player1win or player2win 
function displayResult() {
    if (randomNumber1 === randomNumber2) {
        document.getElementById("gameResult").innerHTML = "Draw!";
    }

    else if (randomNumber1 < randomNumber2) {
        document.getElementById("gameResult").innerHTML
            = (player2 + " wins!");
    }

    else {
        document.getElementById("gameResult").innerHTML
            = (player1 + " wins!");
    }
}