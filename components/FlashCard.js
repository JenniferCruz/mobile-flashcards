import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

class FlashCard extends Component {

  state = {
    hideAnswer: true
  }

  hideAnswer() {
    // this.setState({hideAnswer: true})
  }

  showAnswer() {
    // this.setState({hideAnswer: false})
  }

  render() {
    //const { question, answer } = this.props.navigation.state.params.quiz;
    const question = "?";
    const answer = "!";

    return (<View><Text>FlashCard</Text></View>)
   /*this.state.hideAnswer ? (
      <View>
        <Text>{question}</Text>
        <TouchableHighlight onPress={showAnswer} underlayColor='#m4271a'>
          <Text>answer</Text>
        </TouchableHighlight>
      </View>
    ) : (
      <View>
        <Text>{answer}</Text>
        <TouchableHighlight onPress={hideAnswer} underlayColor='#m4271a'>
          <Text>question</Text>
        </TouchableHighlight>
      </View>
    )

  }*/
}

export default FlashCard;
