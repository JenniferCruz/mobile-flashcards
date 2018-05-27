import React, { Component } from 'react'
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { getRandomOrder } from '../utils/helpers'
import FlashCard from './FlashCard'
import { white, metal, rose, middleBlueGreen } from '../utils/colors'
import { clearLocalNotification, setLocalNotification } from '../utils/notifications'

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
      clearLocalNotification().then(setLocalNotification)
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

    if (questions.length === 0)
      return (
        <View style={{flex: 1, alignItems:'center'}}>
          <Text style={styles.score}>
            {"You don't have any cards yet!"}
          </Text>
          <TouchableHighlight
            style={[styles.btn, styles.roseBackgr]} underlayColor={metal}
            onPress={this.goBack.bind(this)}>
              <Text style={styles.btnText}>Back to deck</Text>
          </TouchableHighlight>
        </View>
      )

    return isCompleted ? (
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.score}>
            Score
          </Text>
          <Text style={[styles.score, {fontSize: 50, paddingTop: 0}]}>
            {`${this.state.rightAnswers}/${this.state.max}`}
          </Text>
        </View>
        <View style={{paddingBottom: 100, alignSelf: 'center'}}>
          <TouchableHighlight
            style={[styles.btn, styles.bluegreenBackgr]} underlayColor={metal}
            onPress={this.restart.bind(this)}>
              <Text style={styles.btnText}>Restart quiz</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.btn, styles.roseBackgr]} underlayColor={metal}
            onPress={this.goBack.bind(this)}>
              <Text style={styles.btnText}>Back to deck</Text>
          </TouchableHighlight>
        </View>
      </View>
    ) : (
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <Text style={styles.counter}>
          {`${this.state.current + 1}/${this.state.max}`}
        </Text>
        <FlashCard quiz={questions[current]} />
        <View style={{paddingBottom: 100, alignSelf: 'center'}}>
          <TouchableHighlight
            style={[styles.btn, styles.bluegreenBackgr]} underlayColor={metal}
            onPress={() => this.saveAnswer(true)}>
              <Text style={styles.btnText}>Correct</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.btn, styles.roseBackgr]} underlayColor={metal}
            onPress={() => this.saveAnswer(false)}>
              <Text style={styles.btnText}>Incorrect</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  counter: {
    fontSize: 25,
    color: metal,
    padding: 20
  },
  score: {
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
  },
  roseBackgr: {
    backgroundColor: rose
  },
  bluegreenBackgr: {
    backgroundColor: middleBlueGreen
  }
})

export default Quiz;
