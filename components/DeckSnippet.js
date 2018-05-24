import React from 'react'
import { Text, View } from 'react-native'
import { getCardsNumberText } from '../utils/helpers'

export default function DeckSnippet ( { deck } ) {
  const length = deck.questions.length;

  return (
    <View>
      <Text>
        {deck.title}
      </Text>
      <Text>
        {getCardsNumberText(deck.questions)}
      </Text>
      <Text>
        _____________________________________
      </Text>
    </View>
  )
}
