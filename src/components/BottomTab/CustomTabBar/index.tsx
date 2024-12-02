import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { BottomTabBar } from '@react-navigation/bottom-tabs'




const CustomTabBar = props => {
  return (
    <View>
        <View style={styles.tabBar} />
            <BottomTabBar { ... props} />
         
        
    </View>
  )
}

export default CustomTabBar
