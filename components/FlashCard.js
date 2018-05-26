import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

class FlashCard extends Component {

  state = {
    hideAnswer: true
  }

  hideAnswer() {
    this.setState({hideAnswer: true})
  }

  showAnswer() {
    this.setState({hideAnswer: false})
  }

  render() {
    const { question, answer } = this.props.quiz;

    return this.state.hideAnswer ? (
      <View>
        <Text>{question}</Text>
        <TouchableHighlight onPress={this.showAnswer.bind(this)} underlayColor='#DAF7A6'>
          <Text>answer</Text>
        </TouchableHighlight>
        <Text>-------------</Text>
      </View>
    ) : (
      <View>
        <Text>{answer}</Text>
        <TouchableHighlight onPress={this.hideAnswer.bind(this)} underlayColor='#DAF7A6'>
          <Text>question</Text>
        </TouchableHighlight>
        <Text>-------------</Text>
      </View>
    )
  }
}

export default FlashCard;
