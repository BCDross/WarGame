document.addEventListener("DOMContentLoaded", function (event) {
  let shuffledDeck = [];
  let playerArray = [];
  let computerArray = [];

  document.getElementById("deal_hands").addEventListener("click", function () {
    Deck.Load();

    // cardArray.forEach(card => {
    //   console.log(card);
    // });

    let handSize = cardArray.length / 2;

    for (i = 0; i < handSize; i++) {
      random = Math.floor(Math.random() * handSize);
      playerArray[i] = cardArray[random];
      computerArray[i] = cardArray[random + handSize];
    }

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

});