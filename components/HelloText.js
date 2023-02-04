import { View, Text } from 'react-native'
import React from 'react'

export function HelloText({ name }) {
  return (
    <View>
      <Text>Hello, {name}!</Text>
    </View>
  )
}