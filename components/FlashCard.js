import React, { Component } from 'react'
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native'
import { orange, white, metal, rose, prune, powder } from '../utils/colors'

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

  static getDerivedStateFromProps(props, state) {
    return {hideAnswer: true}
  }

  render() {
    const { question, answer } = this.props.quiz;

    return this.state.hideAnswer ? (
      <View style={{alignSelf: 'center', padding: 10}}>
        <Text style={styles.text}>{question}</Text>
        <TouchableHighlight
          style={styles.btn} underlayColor={powder}
          onPress={this.showAnswer.bind(this)}>
            <Text style={{color: prune}}>ANSWER</Text>
        </TouchableHighlight>
      </View>
    ) : (
      <View style={{alignSelf: 'center', padding: 10}}>
        <Text style={styles.text}>{answer}</Text>
        <TouchableHighlight
          style={styles.btn} underlayColor={powder}
          onPress={this.hideAnswer.bind(this)}>
            <Text style={{color: prune}}>QUESTION</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    paddingBottom: 15,
    fontSize: 35,
    color: metal
  },
  btn: {
    margin: 5,
    padding: 10,
    width: 150
  },
})

export default FlashCard;
