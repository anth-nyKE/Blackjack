console.log(`Welcome to Blackjack by Anthony.`)

let suits = ['Hearts', 'Flowers', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack',
              'Ten', 'Nine', 'Eight', 'Seven',
              'Six', 'Five', 'Four', 'Three',
              'Two'];

function create_a_pack_of_cards(){
    let deck = [];
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++){
        for (let valueIdx = 0; valueIdx < values.length; valueIdx++){
            let card = {
                suit: suits[suitIdx],
                value: values[valueIdx]
            };
            deck.push( card )
        }
    }

    return deck;
}

let deck = create_a_pack_of_cards();

function pick_a_card(){
    return deck.shift();
}

let playerCards = [ pick_a_card(), pick_a_card() ];

function showCardValue(card){
    return card.value + ' of ' + card.suit;
}

console.log(`Hello player, your starting cards are ` + showCardValue(playerCards[0]) + ` and ` + showCardValue(playerCards[1]));


