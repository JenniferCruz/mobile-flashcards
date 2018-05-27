import { AsyncStorage } from 'react-native';

export default storageMiddleWare = store => next => action => {
  next(action);
  const data = store.getState().decks;
  AsyncStorage.setItem('mobile-flashcards', JSON.stringify(data));
}
