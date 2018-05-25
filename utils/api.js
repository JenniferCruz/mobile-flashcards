import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'mobile-flashcards:decks';
const _decks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
};

export function getDecks() {
  //debugger;
  return _decks;
}

export function addDeck( title ) {
  const newDeck = {title, questions:[]};
  _decks[title] = newDeck;
  console.log("updated decks (not really):", _decks);
}
