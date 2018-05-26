import * as API from '../utils/api'

export const LOAD_DECKS = 'LOAD_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

function loadDecks(decks) {
  return {
    type: LOAD_DECKS,
    decks
  }
}

export function getDecks() {
  //debugger;
  const decks = API.getDecks();
  return loadDecks(decks)
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

// export const getDecks =
// () => dispatch =>
//   API.getDecks()
//     .then(decks => {
//       debugger;
//       dispatch(loadDecks(decks))
//     })
