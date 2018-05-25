import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { addCard } from '../utils/api'

class NewCard extends Component {
  state = {
    question: "",
    answer: ""
  }

  saveCard() {
    // TODO: save new card
    addCard(this.state, this.props.navigation.state.params.deck.title);
    this.setState({question: "", answer: ""});
    this.goBack();
  }

  goBack() {
    this.props.navigation.dispatch(NavigationActions.back());
  }

  render() {

    return (
      <View>
        <Text>Add card</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => this.setState({question: text})}
          value={this.state.question}
          placeholder="Question"
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => this.setState({answer: text})}
          value={this.state.answer}
          placeholder="Answer"
        />
        <TouchableHighlight onPress={this.saveCard.bind(this)} underlayColor='#d4271b'>
          <Text>Submit</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default NewCard;
