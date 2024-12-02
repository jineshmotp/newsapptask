import { Container } from '@/custom/Container'
import { colors } from '@/theme'
import React from 'react'
import { Text, View } from 'react-native'

const SettingsScreen = () => {
  return (
    <Container hasHeader={true} backgroundColor={colors.yellow.$500} isTab={false}>
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
    
    </View>
      </Container>
   
  )
}

export default SettingsScreen
