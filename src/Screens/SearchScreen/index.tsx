import { Container } from '@/custom/Container';
import { colors } from '@/theme';
import React from 'react'
import { Text, View } from 'react-native'

const SearchScreen = () => {
  return (
    <Container hasHeader={true} backgroundColor={colors.teal.$500} isTab={false}>
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search Screen</Text>
    
    </View>
      </Container>
  )
}

export default SearchScreen;
