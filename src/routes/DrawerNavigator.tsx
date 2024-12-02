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
import {useTheme} from '@/components/common/ThemeContext';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const {toggleTheme, theme, isDarkTheme} = useTheme();

//   console.log("Text Color:", theme?.textColor);
// console.log("Background Color:", theme?.backgroundColor);

  return (
    <Drawer.Navigator
      drawerContent={props => (
        <CustomDrawer {...props} toggleTheme={toggleTheme} />
      )}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: theme?.selectionColor,
        drawerActiveTintColor: colors.white,
        drawerInactiveTintColor: isDarkTheme ? colors.white : colors.black,
        drawerLabelStyle: {
          marginLeft: -10,
          color:isDarkTheme ? colors.white : colors.black
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          title: 'Home',
          drawerLabelStyle: ({focused}) => ({
            color:isDarkTheme ? colors.white : colors.black
          }),
          drawerIcon: ({focused, color, size}) => (
            <Ionicons
              name="home-outline"
              size={px(18)}
              color={
                isDarkTheme
                  ? theme?.iconColor
                  : focused
                  ? colors.white
                  : colors.black
              }
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          title: 'Details',
          drawerLabelStyle: ({focused}) => ({
            color:isDarkTheme ? colors.white : colors.black
          }),
          drawerIcon: ({focused, color, size}) => (
            <AntDesign
              name="user"
              size={px(18)}
              color={
                isDarkTheme
                  ? theme?.iconColor
                  : focused
                  ? colors.white
                  : colors.black
              }
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          drawerLabelStyle: ({focused}) => ({
            color:isDarkTheme ? colors.white : colors.black
          }),
          drawerIcon: ({focused, color, size}) => (
            <AntDesign
              name="user"
              size={px(18)}
              color={
                isDarkTheme
                  ? theme?.iconColor
                  : focused
                  ? colors.white
                  : colors.black
              }
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
