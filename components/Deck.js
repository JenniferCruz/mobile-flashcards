import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { getDecks, getCardsNumberText } from '../utils/helpers'
import DeckSnippet from './DeckSnippet'

class Deck extends Component {


  render() {
    const deck = this.props.deck;

    return (
      <View>
        <Text>{deck.title}</Text>
        <Text>
          {getCardsNumberText(deck.questions)}
        </Text>
        <TouchableHighlight onPress={()=>{}} underlayColor='#d4271b'>
          <Text>Start Quiz</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>{}} underlayColor='#d4271b'>
          <Text>Add Card</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Deck;
