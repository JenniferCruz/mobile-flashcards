import { LOAD_DECKS, ADD_DECK, ADD_CARD } from '../actions'

export default function decks(state = {decks: {}}, action) {
  switch (action.type) {
    case LOAD_DECKS:
      // debugger;
      return {
        ...state,
        decks: action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        decks: {...state.decks, [action.title]: {title: action.title, questions: []} }
      }
    case ADD_CARD:
      const deck = Object.assign(state.decks[action.deckTitle], {});
      deck.questions = deck.questions.concat([action.card]);
      return {
        ...state,
        decks: {...state.decks, [deck.title]: deck}
      }
    default:
      return state;
  }
}
