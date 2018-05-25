import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { getCardsNumberText } from '../utils/helpers'

class DeckSnippet extends Component {

  render() {
    const { deck, navigate } = this.props;
    const length = deck.questions.length;

    return (
      <TouchableOpacity onPress={() => {
        // debugger;
        return navigate('DeckDetails', { deck });
      }}>
        <View>
          <Text>
            {deck.title}
          </Text>
          <Text>
            {getCardsNumberText(deck.questions)}
          </Text>
          <Text>
            _____________________________________
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default DeckSnippet;
