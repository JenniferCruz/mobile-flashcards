import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList } from 'react-native'
import { AppLoading} from 'expo'
import { getDecks } from '../utils/helpers'
import DeckSnippet from './DeckSnippet'
import * as ACTIONS from '../actions'

class DeckList extends Component {

    componentDidMount() {
      //  debugger;
      this.props.dispatch(
        ACTIONS.getDecks()
      );
    }

  render() {
    const decks = this.props.decks;
    // debugger;
    return decks.length === 0 ? (
      <View>
        <AppLoading/>
      </View>
    ) : (
      <View>
        <Text>Decks</Text>
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
  return state
}

export default connect(
  mapStateToProps
)(DeckList)
