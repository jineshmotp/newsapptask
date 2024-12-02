import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import RNView from '@/custom/RNView';
import {px} from '@/utils';
import RNImage from '@/custom/RNImage';
import { colors } from '@/theme';



const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground
        source={require('@/assets/images/drawer/userBG.jpg')}
        style={{height: px(140)}}>
        <RNImage
          source={require('@/assets/images/drawer/user.jpg')}
          style={styles.userImage}
        />
      </ImageBackground>
      <RNView style={{backgroundColor:colors.transparent}}>
        <RNView style={styles.drawerListWrapper}>
          <DrawerItemList {...props} />
        </RNView>
      </RNView>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
