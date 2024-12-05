import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Platform, TouchableOpacity, View} from 'react-native';

import HomeScreen from '@/Screens/HomeScreen';
import SearchScreen from '@/Screens/SearchScreen';
import SettingsScreen from '@/Screens/SettingsScreen';
import {colors} from '@/theme';
import {styles} from './styles';
import CustomTabBarButton from '@/components/BottomTab/CustomTabBarButton';
import CustomTabBar from '@/components/BottomTab/CustomTabBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@/components/common/ThemeContext'; 

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { theme,isDarkTheme } = useTheme();
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={({route}) => ({
        headerShown: false, // Ensures no headers are shown globally
        tabBarShowLabel: false,
        tabBarInactiveTintColor: colors.gray,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({focused, color, size}) => {
          let imageSource;

          switch (route.name) {
            case 'Home':
              imageSource = focused
                ? require('@/assets/images/bottomTab/home-select.png')
                : require('@/assets/images/bottomTab/home.png');
              break;
            case 'Search':
              imageSource = focused
                ? require('@/assets/images/bottomTab/search.png')
                : require('@/assets/images/bottomTab/search.png');
              break;
            case 'Settings':
              imageSource = focused
                ? require('@/assets/images/bottomTab/settings-select.png')
                : require('@/assets/images/bottomTab/settings.png');
              break;
            default:
              imageSource = require('@/assets/images/bottomTab/search.png'); // Default image
              break;
          }

          return (
            <Image
              source={imageSource}
              style={{
                width: 24,
                height: 24,
                resizeMode: 'contain',
                tintColor: focused ? colors.primary : colors.white,
              }}
            />
          );
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarButton: props => (
            <CustomTabBarButton route="HomeScreen" {...props} />
          ),
          // headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarButton: props => (
            <CustomTabBarButton route="SearchScreen" {...props} />
          ),
          // headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarButton: props => (
            <CustomTabBarButton route="SettingsScreen" {...props} />
          ),
          headerShown: true, // Show header for Settings screen
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons
                name="menu"
                size={24} // Adjust size to your preference
                color={colors.primary}
                style={{marginRight: 16}} // Add margin for spacing
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
