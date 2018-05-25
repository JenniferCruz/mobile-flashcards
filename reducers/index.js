import { LOAD_DECKS } from '../actions'

export default function decks(state = {decks:[]}, action) {
  switch (action.type) {
    case LOAD_DECKS:
      // debugger;
      return {
        ...state,
        decks: Object.keys(action.decks).map(k => action.decks[k])
      };
    default:
      return state;
  }
}
