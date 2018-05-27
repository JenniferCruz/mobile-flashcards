import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import { getDecks, getCardsNumberText } from '../utils/helpers'
import DeckSnippet from './DeckSnippet'
import { NavigationActions } from 'react-navigation'
import { orange, white, metal, rose } from '../utils/colors'

class Deck extends Component {

  render() {
    const key = this.props.navigation.state.params.deck.title;
    const deck = this.props.decks[key];
    const navigate = this.props.navigation.navigate;

    return (
      <View style={{justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={styles.deckTitle}>{deck.title}</Text>
        <Text style={{paddingBottom: 60}}>
          {getCardsNumberText(deck.questions)}
        </Text>
        <TouchableHighlight
          style={styles.btn}
          underlayColor={orange}
          onPress={()=>navigate('TakeQuiz', { deck })} underlayColor={orange}>
            <Text style={styles.btnText}>Start Quiz</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.btn}
          underlayColor={orange}
          onPress={()=>navigate('AddCard', { deck })} underlayColor={orange}>
            <Text style={styles.btnText}>Add Card</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deckTitle: {
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: 35,
    color: metal
  },
  btn: {
    margin: 5,
    backgroundColor: rose,
    padding: 10,
    borderRadius: 2,
    width: 150
  },
  btnText: {
    fontSize: 15,
    color: white,
    textAlign: 'center',
  }
})

function mapStateToProps (state) {
  return state;
}

export default connect(
  mapStateToProps
)(Deck)
