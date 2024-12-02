// src/navigation/BottomTabNavigator.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@/Screens/HomeScreen';
import SettingsScreen from '@/Screens/SettingsScreen';
import RNImage from '@/custom/RNImage';
import {Platform, View} from 'react-native';
import {colors} from '@/theme';
import {px} from '@/utils';
import SearchScreen from '@/Screens/SearchScreen';
import RNView from '@/custom/RNView';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: px(0),
    left: px(0),
    right: px(0),
    height: Platform.OS === 'ios' ? px(90) : px(70),
    backgroundColor: colors.white,
    borderRadius: px(0),
    elevation: 5,
    overflow: 'visible', // Important for elevated Search tab icon
  },
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <RNImage
              source={
                focused
                  ? require('@/assets/images/bottomTab/home-select.png')
                  : require('@/assets/images/bottomTab/home.png')
              }
              resizeMode="contain"
              style={{
                height: px(24),
                width: px(24),
                tintColor: focused ? colors.primary : colors.gray,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.primary,
                height: px(70),
                width: px(70),
                position: 'absolute',
                top: px(0), // Elevated position
                borderRadius: px(35),
                borderWidth: px(2),
                borderColor: colors.white,
                zIndex: 10, // Ensure it appears above the tab bar
              }}>
              <Ionicons
                name="search-outline"
                size={px(24)}
                color={colors.white}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <RNImage
              source={
                focused
                  ? require('@/assets/images/bottomTab/settings-select.png')
                  : require('@/assets/images/bottomTab/settings.png')
              }
              resizeMode="contain"
              style={{
                height: px(24),
                width: px(24),
                tintColor: focused ? colors.primary : colors.gray,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
