import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import { getRandomOrder } from '../utils/helpers'
//import FlashCard from './FlashCard'

class Quiz extends Component {

  state = {
    current: 0,
    numbers: [],
    rightAnswers: 0,
    wrongAnswers: 0,
    max: 0
  }

  nextQuestion() {
    if (this.state.current < this.state.max)
      this.setState(state => ({...state, current: state.current + 1}));
    else {
      // TODO: Wrap up
    }
  }

  saveAnswer( isCorrect ) {
    const ans = isCorrect ? "rightAnswers" : "wrongAnswers"
    this.setState(state =>
      ({...state, [ans]: state[ans] + 1, current: state.current + 1}));
    nextQuestion();
  }

  componentDidMount() {
    const max = this.props.navigation.state.params.deck.questions.length;
    const numbers = getRandomOrder( max );
    this.setState(state => ({
        ...state, max, numbers
    }))
  }

  render() {
    const questions = [{question: "1", answer:"A"}];//this.props.navigation.state.params.deck.questions;
    let current = this.state.current;

    return (
      <View>
        <Text>
          {`${this.state.current + 1}/${this.state.max}`}
        </Text>
        {/*<FlashCard quiz={questions[current]}/>*/}
        <TouchableHighlight onPress={() => this.saveAnswer(true)} underlayColor='#m4271a'>
          <Text>Correct</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.saveAnswer(false)} underlayColor='#m4271a'>
          <Text>Incorrect</Text>
        </TouchableHighlight>        
      </View>
    )
  }
}

export default Quiz;
