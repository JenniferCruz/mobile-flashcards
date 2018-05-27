import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import * as ACTIONS from '../actions'
import { white, metal, rose } from '../utils/colors'

class NewDeck extends Component {
  state = {
    title: ""
  }

  saveDeck( ) {
    this.props.dispatch(ACTIONS.addDeck(this.state.title));
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
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          style={{height: 40, width: 300, alignSelf: 'center'}}
          onChangeText={text => this.setState({title: text})}
          value={this.state.title}
          placeholder="Deck Title"
        />
        <TouchableHighlight
          style={styles.btn} underlayColor='#d4271b'
          onPress={this.saveDeck.bind(this)}>
            <Text style={styles.btnText}>Submit</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 200,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    color: metal,
    paddingTop: 50
  },
  btnText: {
    textAlign: 'center',
    color: white,
    fontSize: 15,
  },
  btn: {
    margin: 5,
    padding: 10,
    borderRadius: 2,
    width: 150,
    backgroundColor: rose,
    alignSelf: 'center'
  },
})

export default connect()(NewDeck)
