import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList } from 'react-native'
import { AppLoading} from 'expo'
import { getDecks } from '../utils/helpers'
import DeckSnippet from './DeckSnippet'
import * as ACTIONS from '../actions'

class DeckList extends Component {

  render() {
    const decks = this.props.decks;
    // debugger;
    return decks.length === 0 ? (
      <View>
        <AppLoading/>
      </View>
    ) : (
      <View>
        <FlatList
          data={decks}
          keyExtractor={item => item.title}
          renderItem={({ item }) => {
            return (<DeckSnippet deck={item} navigate={this.props.navigation.navigate}/>)
          }}
        />
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {decks: Object.keys(state.decks).map(k => state.decks[k])}
}

export default connect(
  mapStateToProps
)(DeckList)
