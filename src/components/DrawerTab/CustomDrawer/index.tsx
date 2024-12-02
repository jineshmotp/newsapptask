import React from 'react';
import {ImageBackground, Switch, Text, View} from 'react-native';
import {styles} from './styles';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import RNView from '@/custom/RNView';
import {px} from '@/utils';
import RNImage from '@/custom/RNImage';
import { colors } from '@/theme';
import { RNText } from '@/custom/RNText';
import { useTheme } from '@/components/common/ThemeContext'; 

interface CustomDrawerProps {
  toggleTheme: () => void;
}


const CustomDrawer: React.FC<CustomDrawerProps> = ({ toggleTheme, ...props }) => {

   const { theme, isDarkTheme } = useTheme();

  return (
    <DrawerContentScrollView {...props} style={{backgroundColor:theme?.backgroundColor}}>
      <ImageBackground
        source={require('@/assets/images/drawer/userBG.jpg')}
        style={{height: px(140)}}>
        <RNImage
          source={require('@/assets/images/drawer/user.jpg')}
          style={styles.userImage}
        />
      </ImageBackground>
      <RNView style={{ backgroundColor: colors.transparent }}>
        <RNView style={styles.drawerListWrapper}>
          <DrawerItemList {...props} />
        </RNView>
      </RNView>


      <RNView style={styles.toggleWrapper}>
        <RNText style={styles.themeText}>Dark Mode</RNText>
        <Switch onValueChange={toggleTheme} value={isDarkTheme} />
      </RNView>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
