let Deck = {

  const: suits = [1, 2, 3, 4],
  const: ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],

  let: cardArray = [],
  Load: function () {
    for (let suit in suits) {
      for (let rank in ranks) {
        cardArray.push(new Card(suits[suit], ranks[rank]));
      }
    }
  }
}