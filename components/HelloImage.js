import { View, Text, Image } from 'react-native'
import React from 'react'

export function HelloImage({ url }) {
  return (
    <View>
      <Image
        source={{ uri: url }}
        accessibilityLabel="raccoon waving"
      />
    </View>
  )
}