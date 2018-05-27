import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import * as ACTIONS from '../actions'
import { orange, white, metal, rose } from '../utils/colors'

class NewCard extends Component {
  state = {
    question: "",
    answer: ""
  }

  saveCard() {
    this.props.dispatch(
      ACTIONS.addCard(this.state, this.props.navigation.state.params.deck.title)
    )
    this.setState({question: "", answer: ""});
    this.goBack();
  }

  goBack() {
    this.props.navigation.dispatch(NavigationActions.back());
  }

  render() {

    return (
      <View style={{padding: 40}}>
        <Text style={styles.title}>Add card</Text>
        <TextInput
          onChangeText={text => this.setState({question: text})}
          value={this.state.question}
          placeholder="Question"
        />
        <TextInput
          style={{paddingTop: 20}}
          onChangeText={text => this.setState({answer: text})}
          value={this.state.answer}
          placeholder="Answer"
        />
        <TouchableHighlight
          style={styles.btn}
          underlayColor={orange}
          onPress={this.saveCard.bind(this)}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: 15,
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

export default connect()(NewCard)
