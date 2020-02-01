document.addEventListener("DOMContentLoaded", function(event) {
  let shuffledDeck = [];
  let playerArray = [];
  let computerArray = [];
  let handSize = 0;

  let dealEle = document.getElementById("deal");
  let nextEle = document.getElementById("next");
  let pScoreEle = document.getElementById("playerScore");
  let cScoreEle = document.getElementById("computerScore");
  let pCardEle = document.getElementById("playerCard");
  let cCardEle = document.getElementById("computerCard");
  let turnEle = document.getElementById("turnCounter");
  let rulesEle = document.getElementById("rules");
  let messageEle = document.getElementById("message");

  dealEle.addEventListener("click", function() {
    // Reset game to play again.
    shuffledDeck = [];
    playerArray = [];
    computerArray = [];
    pScoreEle.innertext = "";
    cScoreEle.innertext = "";
    pCardEle.innertext = "";
    cCardEle.innertext = "";
    turnEle.innertext = 0;

    Deck.Load();

    // cardArray.forEach(card => {
    //   console.log(card);
    // });
    let random;
    handSize = cardArray.length / 2;
    console.log(handSize);

    for (let i = 0; i < cardArray.length; i++) {
      random = Math.floor(Math.random() * cardArray.length);
      if (cardArray[random].inuse === false) {
        shuffledDeck.push(cardArray[random]);
        cardArray[random].inuse = true;
      } else {
        i--;
      }
    }

    for (let i = 0; i < handSize; i++) {
      computerArray[i] = shuffledDeck[i];
      playerArray[i] = shuffledDeck[i + 26];
    }
    //Move the Deck reset here to ensure it happens after the Deck is created but doesn't break the game before the game actually plays.
    cardArray.length = 0;
    rulesEle.style.display = "none";
    dealEle.style.display = "none";
    document.getElementById("gamefield").style.display = "block";
    nextEle.style.display = "block";

    console.log("Player Hand");
    for (let i = 0; i < handSize; i++) {
      console.log(playerArray[i]);
    }
    console.log("*******************************");
    console.log("Computer Hand");
    for (let i = 0; i < handSize; i++) {
      console.log(computerArray[i]);
    }
  });

  nextEle.addEventListener("click", function() {
    let handSize = playerArray.length;
    let turnCounter = Number(turnEle.innerText);
    let playerScore = Number(pScoreEle.innerText);
    let computerScore = Number(cScoreEle.innerText);

    if (playerArray[turnCounter].rank > computerArray[turnCounter].rank) {
      playerScore++;
    }
    if (playerArray[turnCounter].rank < computerArray[turnCounter].rank) {
      computerScore++;
    }
    if (playerArray[turnCounter].rank === computerArray[turnCounter].rank){
      if (playerArray[turnCounter].suit > computerArray[turnCounter].suit){
        playerScore++;
        messageEle.innerText = "You won the hand.";
      }
      if (playerArray[turnCounter].suit < computerArray[turnCounter].suit){
        computerScore++;
        messageEle.innerText = "You lost the hand.";
      }
    }
    
    swapRank(playerArray[turnCounter]);
    swapSuit(playerArray[turnCounter]);
    swapRank(computerArray[turnCounter]);
    swapSuit(computerArray[turnCounter]);

    if (playerArray[turnCounter].suit === "SPADE" || playerArray[turnCounter].suit === "CLUB"){
      pCardEle.style.color = "black";
      pCardEle.style.fontSize = "3em";      
    }
    else {
      pCardEle.style.color = "red";
      pCardEle.style.fontSize = "3em";
    };
    if (computerArray[turnCounter].suit === "SPADE" || computerArray[turnCounter].suit === "CLUB"){
      cCardEle.style.color = "black";
      cCardEle.style.fontSize = "3em";
    }
    else {
      cCardEle.style.color = "red";
      cCardEle.style.fontSize = "3em";
    }

    pCardEle.innerText = playerArray[turnCounter].rank + " " + playerArray[turnCounter].suit;
    cCardEle.innerText = computerArray[turnCounter].rank + " " + computerArray[turnCounter].suit;

    pScoreEle.innerText = playerScore;
    cScoreEle.innerText = computerScore;

    turnEle.innerText = ++turnCounter;

    if (turnCounter === handSize) {
      if (playerScore > computerScore) {
        messageEle.innerText = "Game over. YOU WON!";
      }
      if (playerScore < computerScore) {
        messageEle.innerText = "Game over. You lost.";
      }
      if (playerScore === computerScore) {
        messageEle.innerText =
          "Game over. It is a tie!";
      }
      nextEle.style.display = "none";
      // TODO: Need to figure out how to reset the game properly. Resetting the game goes into an infinite loop in several places for some reason. Fixed several but still find more. UGH!!!!!
      //dealEle.style.display = "block";
    }
  });

  let swapRank = function(pCard) {
    switch (pCard.rank) {
      case 11:
        pCard.rank = "JACK";
        break;
      case 12:
        pCard.rank = "QUEEN";
        break;
      case 13:
        pCard.rank = "KING";
        break;
      case 14:
        pCard.rank = "ACE";
        break;
      default:
        break;
    }
    return pCard;
  };

  let swapSuit = function(pCard){
    switch (pCard.suit) {
      case 1:
        pCard.suit = "SPADE";
        break;
      case 2:
        pCard.suit = "CLUB";
        break;
      case 3:
        pCard.suit = "DIAMOND";
        break;
      case 4:
        pCard.suit = "HEART";
        break;
    }
    return pCard;
  };

  let swapSuitStyle = function(pCard) {
    switch (pCard.suit){
      case 1:
        pCard.suit = "SPADE";
        break;
      case 2:
        pCard.suit = "CLUB";
        break;
      case 3:
        pCard.suit = "DIAMOND";
        break;
      case 4:
        pCard.suit = "HEART";
        break;
    }
  }
});
