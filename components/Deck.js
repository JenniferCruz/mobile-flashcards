import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { getDecks, getCardsNumberText } from '../utils/helpers'
import DeckSnippet from './DeckSnippet'
import { NavigationActions } from 'react-navigation'

class Deck extends Component {

  render() {
    const deck = this.props.navigation.state.params.deck;
    const navigate = this.props.navigation.navigate;
    // TODO: connect component
    return (
      <View>
        <Text>{deck.title}</Text>
        <Text>
          {getCardsNumberText(deck.questions)}
        </Text>
        <TouchableHighlight onPress={()=>navigate('TakeQuiz', { deck })} underlayColor='#d4271b'>
          <Text>Start Quiz</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>navigate('AddCard', { deck })} underlayColor='#d4271b'>
          <Text>Add Card</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Deck;
