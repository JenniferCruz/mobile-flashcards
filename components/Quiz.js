import React from 'react'
import { Text, View } from 'react-native'

export default function Quiz ( props ) {

  const length = props.navigation.state.params.deck.questions.length;

  return (
    <View>
      <Text>Quiz</Text>
      <Text>
        _____________________________________
      </Text>
    </View>
  )
}
