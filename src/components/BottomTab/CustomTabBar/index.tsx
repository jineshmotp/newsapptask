import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import { BottomTabBar } from '@react-navigation/bottom-tabs'
import { useTheme } from '@/components/common/ThemeContext'; 
import { colors } from '@/theme';




const CustomTabBar = props => {
  const { theme,isDarkTheme } = useTheme();
  return (
    <View>
        <View style={[styles.tabBar,{backgroundColor: isDarkTheme ? colors.gray : colors.primary}]} />
            <BottomTabBar { ... props} />
         
        
    </View>
  )
}

export default CustomTabBar
