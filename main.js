document.addEventListener("DOMContentLoaded", function(event) {
  let shuffledDeck = [];
  let playerArray = [];
  let computerArray = [];

  document.getElementById("deal").addEventListener("click", function() {
    // Reset game to play again.
    Deck.cardArray = [];
    document.getElementById("playerScore").innertext = "";
    document.getElementById("computerScore").innertext = "";
    document.getElementById("playerCard").innertext = "";
    document.getElementById("computerCard").innertext = "";
    document.getElementById("turnCounter").innertext = 0;

    Deck.Load();

    // cardArray.forEach(card => {
    //   console.log(card);
    // });
    let random;
    let handSize = cardArray.length / 2;
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

    document.getElementById("rules").style.display = "none";
    document.getElementById("deal").style.display = "none";
    document.getElementById("gamefield").style.display = "block";
    document.getElementById("next").style.display = "block";

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

  document.getElementById("next").addEventListener("click", function() {
    let handSize = playerArray.length;
    let turnCounter = Number(document.getElementById("turnCounter").innerText);
    let playerScore = Number(document.getElementById("playerScore").innerText);
    let computerScore = Number(document.getElementById("computerScore").innerText);

    if (playerArray[turnCounter].rank > computerArray[turnCounter].rank) {
      playerScore++;
    }
    if (playerArray[turnCounter].rank < computerArray[turnCounter].rank) {
      computerScore++;
    }
    if (playerArray[turnCounter].rank === computerArray[turnCounter].rank){
      if (playerArray[turnCounter].suit > computerArray[turnCounter].suit){
        playerScore++;
        document.getElementById("message").innerText = "You won the hand.";
      }
      if (playerArray[turnCounter].suit < computerArray[turnCounter].suit){
        computerScore++;
        document.getElementById("message").innerText = "You lost the hand.";
      }
    }
    let playerCardDisplay = "Rank: " + swapRank(playerArray[turnCounter].Rank) + " Suit: " + swapSuit(playerArray[turnCounter].Suit);
    document.getElementById("playerCard").innerText = playerCardDisplay;
    document.getElementById("computerCard").innerText = "Rank: " + swapRank(computerArray[turnCounter].Rank) + " Suit: " + " " + swapSuit(computerArray[turnCounter].Suit);
      
    document.getElementById("playerScore").innerText = playerScore;
    document.getElementById("computerScore").innerText = computerScore;

    document.getElementById("turnCounter").innerText = ++turnCounter;

    if (turnCounter === handSize) {
      if (playerScore > computerScore) {
        document.getElementById("message").innerText = "Game over. YOU WON!";
      }
      if (playerScore < computerScore) {
        document.getElementById("message").innerText = "Game over. You lost.";
      }
      if (playerScore === computerScore) {
        document.getElementById("message").innerText =
          "Game over. It is a tie!";
      }
      document.getElementById("next").style.display = "none";
    }
  });

  let swapRank = function(pRank) {
    switch (pRank) {
      case 11:
        pRank = "JACK";
      case 12:
        pRank = "QUEEN";
      case 13:
        pRank = "KING";
      case 14:
        pRank = "ACE";
      default:
        break;
    }
    return pRank;
  };
  let swapSuit = function(pSuit){
    switch (pSuit) {
      case 1:
        pSuit = "SPADE";
      case 2:
        pSuit = "CLUB";
      case 3:
        pSuit = "DIAMOND";
      case 4:
        pSuit = "HEART";
    }
    return pSuit;
  };
});
