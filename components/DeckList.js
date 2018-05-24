import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { getDecks } from '../utils/helpers'
import DeckSnippet from './DeckSnippet'

class DeckList extends Component {


  render() {
    const decks = getDecks();
    const keys = Object.keys(decks).map(key => ({...decks[key]}));

    return (
      <View>
        <FlatList
          data={keys}
          renderItem={({ item }) => {
            return (<DeckSnippet deck={item}/>)
          }}
        />
      </View>
    )
  }
}

export default DeckList;
