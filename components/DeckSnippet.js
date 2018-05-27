import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { getCardsNumberText } from '../utils/helpers'
import { blueGreen, gray, metal } from '../utils/colors'

class DeckSnippet extends Component {

  render() {
    const { deck, navigate } = this.props;
    const length = deck.questions.length;

    return (
      <TouchableOpacity onPress={() => navigate('DeckDetails', { deck })}>
        <View style={styles.container}>
          <Text style={styles.title}>
            {deck.title}
          </Text>
          <Text style={styles.cardsCount}>
            {getCardsNumberText(deck.questions)}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: metal,
    paddingTop: 20,
    paddingBottom: 20
  },
  title: {
    fontSize: 30,
    color: blueGreen,
    textAlign: 'center'
  },
  cardsCount: {
    fontSize: 15,
    textAlign: 'center',
    color: gray
  },
})

export default DeckSnippet;
