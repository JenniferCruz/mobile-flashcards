import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { TabNavigator, StackNavigator } from 'react-navigation';
import DeckList from './components/DeckList'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import NewDeck from './components/NewDeck'
import NewCard from './components/NewCard'
import reducer from './reducers'
import { purple, green, blue, white } from './utils/colors'
import { Constants } from 'expo'
import storage from './utils/storage'
import { AsyncStorage } from 'react-native';
import * as ACTIONS from './actions/index'
import DummyData from './utils/defaultData'

const store = createStore(reducer, compose(
  applyMiddleware(storage)
));

const Tabs = TabNavigator({
  Decks: {
    screen: DeckList
  },
  New: {
    screen: NewDeck
  },
});

const Navigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckDetails: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
  AddCard: {
    screen: NewCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: green,
      }
    }
  },
  TakeQuiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      }
    }
  }
})

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight*4 }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

AsyncStorage.getItem('mobile-flashcards').then(data => {
  if ( data === null )
    store.dispatch(ACTIONS.loadDecks( DummyData ));
  else
    store.dispatch(ACTIONS.loadDecks(JSON.parse( data )));
});

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <Navigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
