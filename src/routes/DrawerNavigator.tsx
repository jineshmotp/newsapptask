// src/navigation/DrawerNavigator.tsx
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {colors, SIZES} from '@/theme';
import {px} from '@/utils';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ProfileScreen from '@/Screens/ProfileScreen';
import DetailsScreen from '@/Screens/DetailsScreen';
import BottomTabNavigator from './BottomTabNavigator';
import CustomDrawer from '@/components/DrawerTab/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
  drawerContent={props => <CustomDrawer { ... props}/>}
    screenOptions={{
      headerShown: false,
      drawerActiveBackgroundColor: colors.primary,
      drawerActiveTintColor: colors.white,
      drawerLabelStyle: {
        marginLeft:-10,
      }
    }}>
    <Drawer.Screen
      name="Home"
      component={BottomTabNavigator}
      options={{
        title: 'Home',
        drawerIcon: ({ focused, color,size}) => (
          <Ionicons name="home-outline" size={px(18)} color={color} />
        ),
      }}
    />

    <Drawer.Screen name="Details" component={DetailsScreen} 
    options={{
      title: 'Details',
      drawerIcon: ({ focused, color,size}) => (
        <AntDesign name="user" size={px(18)} color={color} />
      ),
    }}
    />

    <Drawer.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        title: 'Profile',
        drawerIcon: ({ focused, color,size}) => (
          <AntDesign name="user" size={px(18)} color={color} />
        ),
      }}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
