let Deck = function(){

  let cardArray = [];

  const suits = [1,2,3,4];
  const ranks = [2,3,4,5,6,7,8,9,10,11,12,13,14];

  for (let suit in suits){
    for (let rank in ranks){
      let card = {Suit: suits[suit], Rank: ranks[rank]};
      this.cardArray.push(card);
    }
  }
return cardArray;
}