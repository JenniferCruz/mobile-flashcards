import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList'
import NewCard from './components/NewCard'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NewCard deck="React"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});