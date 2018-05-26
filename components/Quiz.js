import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { getRandomOrder } from '../utils/helpers'
import FlashCard from './FlashCard'

class Quiz extends Component {

  state = {
    max: 0,
    current: 0,
    numbers: [],
    rightAnswers: 0,
    wrongAnswers: 0,
    isCompleted: false
  }

  nextQuestion() {
    if (this.state.current < this.state.max - 1)
      this.setState(state => ({...state, current: state.current + 1}));
    else {
      this.setState(state => ({...state, isCompleted: true}));
    }
  }

  saveAnswer( isCorrect ) {
    const ans = isCorrect ? "rightAnswers" : "wrongAnswers"
    this.setState(state =>
      ({...state, [ans]: state[ans] + 1}));
    this.nextQuestion();
  }

  restart() {
    const numbers = getRandomOrder( this.state.max );
    this.setState(state => ({
      numbers,
      current: 0,
      max: state.max,
      rightAnswers: 0,
      wrongAnswers: 0,
      isCompleted: false
    }))
  }

  goBack() {
    this.props.navigation.dispatch(NavigationActions.back());
  }

  componentDidMount() {
    const max = this.props.navigation.state.params.deck.questions.length;
    const numbers = getRandomOrder( max );
    this.setState(state => ({
        ...state, max, numbers
    }))
  }

  render() {
    const questions = this.props.navigation.state.params.deck.questions;
    let { current, isCompleted } = this.state;

    return isCompleted ? (
      <View>
        <Text>
          {`Score: ${this.state.rightAnswers}/${this.state.max}`}
        </Text>
        <TouchableHighlight onPress={this.restart.bind(this)} underlayColor='#FFC300'>
          <Text>Restart quiz</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.goBack.bind(this)} underlayColor='#FFC300'>
          <Text>Back to deck</Text>
        </TouchableHighlight>
      </View>
    ) : (
      <View>
        <Text>
          {`${this.state.current + 1}/${this.state.max}`}
        </Text>
        <FlashCard quiz={questions[current]}/>
        <TouchableHighlight onPress={() => this.saveAnswer(true)} underlayColor='#FFC300'>
          <Text>Correct</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.saveAnswer(false)} underlayColor='#FFC300'>
          <Text>Incorrect</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Quiz;
