import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import { addDeck } from '../utils/api'
import { NavigationActions } from 'react-navigation'

class NewDeck extends Component {
  state = {
    title: ""
  }

  saveDeck( ) {
    // TODO: save new deck
    addDeck(this.state.title);
    this.setState({title:""});
    this.goHome();
  }

  goHome() {
    this.props.navigation.dispatch(NavigationActions.navigate({
      routeName: 'Home',
      // params: {},
      action: NavigationActions.navigate({ routeName: 'Decks' }),
    })
    )
  }

  render() {
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => this.setState({title: text})}
          value={this.state.title}
          placeholder="Deck Title"
        />
        <TouchableHighlight onPress={this.saveDeck.bind(this)} underlayColor='#d4271b'>
          <Text>Submit</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default NewDeck;
