// src/navigation/DrawerNavigator.tsx
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from '../BottomTabNavigator';
import {colors, SIZES} from '@/theme';
import {px} from '@/utils';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ProfileScreen from '../ProfileScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
drawerPosition="left" // Make sure the drawer opens from the left side
screenOptions={{
  drawerStyle: {
    backgroundColor: colors.white,
    width: px(250),
    zIndex: 1,
    overflow: 'visible', // Ensure content isn't hidden
  },
  headerStyle: {
    backgroundColor: colors.white,
  },
  headerShown: true,
  headerTintColor: colors.black,
}}
    
    >
    <Drawer.Screen
      name="Home"
      options={{
        drawerLabel: 'Home',
        title: 'Home',
        headerShadowVisible: false,
        drawerIcon: () => (
          <Ionicons name="home-outline" size={px(24)} color={colors.black} />
        ),
      }}
      component={BottomTabNavigator}
    />

    <Drawer.Screen
      name="ProfileScreen"
      options={{
        drawerLabel: 'Profile',
        title: 'Profile',
        headerShadowVisible: false,
        drawerIcon: () => (
          <AntDesign name="user" size={px(24)} color={colors.black} />
        ),
      }}
      component={ProfileScreen}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
