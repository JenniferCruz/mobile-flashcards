import React from 'react';
import { Text, View, StatusBar, AsyncStorage } from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { Constants } from 'expo'
import DeckList from './components/DeckList'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import NewDeck from './components/NewDeck'
import NewCard from './components/NewCard'
import reducer from './reducers'
import { metal, blueGreen, rose, white, darkGreen } from './utils/colors'
import storage from './utils/storage'
import * as ACTIONS from './actions/index'
import DummyData from './utils/defaultData'
import { setLocalNotification } from './utils/notifications'

const store = createStore(reducer, compose(
  applyMiddleware(storage)
));

const Tabs = createMaterialTopTabNavigator({
  Decks: {
    screen: DeckList
  },
  New: {
    screen: NewDeck
  },
}, {
  tabBarOptions: {
  style: {
    backgroundColor: blueGreen,
  }},
});

const Navigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      headerTintColor: metal,
      headerStyle: {
        backgroundColor: blueGreen,
        height: 0,
      }
    }

  },
  DeckDetails: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: metal,
      headerStyle: {
        backgroundColor: blueGreen,
      }
    }
  },
  AddCard: {
    screen: NewCard,
    navigationOptions: {
      headerTintColor: metal,
      headerStyle: {
        backgroundColor: blueGreen,
      }
    }
  },
  TakeQuiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: metal,
      headerStyle: {
        backgroundColor: blueGreen,
      }
    }
  }
})

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
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

  componentDidMount() {
    setLocalNotification()
  }
  
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={metal} barStyle="light-content" />
          <Navigator />
        </View>
      </Provider>
    );
  }
}
