export const LOAD_DECKS = 'LOAD_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

export function loadDecks(decks) {
  debugger;
  console.log("!!loading decks", decks)
  return {
    type: LOAD_DECKS,
    decks
  }
}

export function addDeck( title ) {
  return {
    type: ADD_DECK,
    title
  }
}

export function addCard( card, deckTitle ) {
  return {
    type: ADD_CARD,
    card,
    deckTitle
  }
}
