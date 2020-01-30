document.addEventListener("DOMContentLoaded", function (event) {
  let shuffledDeck = [];
  let playerArray = [];
  let computerArray = [];
  let turnCounter;

  document.getElementById("deal").addEventListener("click", function () {
    Deck.Load();

    // cardArray.forEach(card => {
    //   console.log(card);
    // });
    let i;
    let random;
    let handSize = cardArray.length / 2;
    console.log(handSize);

    for (i = 0; i < cardArray.length; i++) {
      random = Math.floor(Math.random() * cardArray.length);
      if (cardArray[random].inuse === false) {
        shuffledDeck.push(cardArray[random]);
        cardArray[random].inuse = true;
      }
      else {
        i--;
      }
    }

    for (i = 0; i < handSize; i++) {
      computerArray[i] = shuffledDeck[i];
      playerArray[i] = shuffledDeck[i + 26];
    }

    document.getElementById("rules").style.display = "none";
    document.getElementById("deal").style.display = "none";
    document.getElementById("gamefield").style.display = "block";
    document.getElementById("next").style.display = "block";

    console.log("Player Hand");
    for (i = 0; i < handSize; i++) {
      console.log(playerArray[i]);
    };
    console.log("*******************************")
    console.log("Computer Hand");
    for (i = 0; i < handSize; i++) {
      console.log(computerArray[i]);
    };

  });

  document.getElementById("next").addEventListener("click", function () {
    let handSize = playerArray.length;
    turnCounter = Number(document.getElementById("turnCounter").innerText);
    let playerScore = Number(document.getElementById("playerScore").innerText);
    let computerScore = Number(document.getElementById("computerScore").innerText);

    document.getElementById("playerCard").innerText = "Rank: " + playerArray[turnCounter].rank + " Suit: " + playerArray[turnCounter].suit;
    document.getElementById("computerCard").innerText = "Rank: " + computerArray[turnCounter].rank + " Suit: " + computerArray[turnCounter].suit;

    if (playerArray[turnCounter].rank > computerArray[turnCounter].rank) {
      playerScore++;
    }
    if (playerArray[turnCounter].rank < computerArray[turnCounter].rank) {
      computerScore++;
    }

    document.getElementById("playerScore").innerText = playerScore;
    document.getElementById("computerScore").innerText = computerScore;

    if (++turnCounter === handSize) {
      if (playerScore > computerScore) {
        document.getElementById("message").innerText = "Game over. YOU WON!";
      }
      if (playerScore < computerScore) {
        document.getElementById("message").innerText = "Game over. You lost.";
      }
      if (playerScore === computerScore) {
        document.getElementById("message").innerText = "Game over. It is a tie!";
      }
      document.getElementById("next").style.display = "none";
    }

  });

});