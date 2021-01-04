import React from 'react'
import { View, Text, Button } from 'react-native'

// import { Container } from './styles';

export default function Simulado ({ navigation }) {
  function navigateToUsers () {
    navigation.navigate('Home', {
      screen: 'Settings'
    })
  }

  return (
    <View style={{ paddingVertical: 40, paddingHorizontal: 20 }}>
      <Text>Simulado **</Text>
      <Button title='Navigate to Settings' onPress={navigateToUsers} />
    </View>
  )
}
