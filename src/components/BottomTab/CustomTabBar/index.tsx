import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { BottomTabBar } from '@react-navigation/bottom-tabs'
import { useTheme } from '@/components/common/ThemeContext'; 
import { colors } from '@/theme';



const CustomTabBar = props => {
  const { theme } = useTheme();
  return (
    <View>
        <View style={[styles.tabBar,{backgroundColor:theme?.backgroundColor}]} />
            <BottomTabBar { ... props} />
         
        
    </View>
  )
}

export default CustomTabBar
