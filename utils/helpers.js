_decks = {
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
  // TODO: this info should be retrieved from Async Storage. If there's nothing, load default
  return _decks;
}

export function addDeck( title ) {
  // TODO: Handle case when deck with same title already exists
  _decks[title] = {questions: [], title}
}

export function addCard( card, deckTitle ) {
  // TODO: save to AsyncStorage
  _decks[title].questions.push(card);
}

export function getCardsNumberText( cards ) {
  const length = cards.length;
  return `${length} ${(length === 1) ? "card" : "cards"}`;
}

export function getRandomOrder( length ) {
  let numbers = [];
  for (let i = 0; i < length; i++)
    numbers.push(i);
  //https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_sort_random    
  numbers.sort(function(a, b){return 0.5 - Math.random()});
  return numbers;
}
