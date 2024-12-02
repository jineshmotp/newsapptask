
import LoginScreen from '@/Screens/LoginScreen';
import HomeScreen from '@/Screens/HomeScreen';
import SettingsScreen from '@/Screens/SettingsScreen';
import SearchScreen from '@/Screens/SearchScreen';
import DetailsScreen from '@/Screens/DetailsScreen';


import { RootStackParamList } from './RootNavigator';
// import BottomTabNavigator from '@/Screens/BottomTabNavigator';
// import DrawerNavigator from '@/Screens/DrawerNavigator';


import BottomTabNavigator from './BottomTabNavigator';
import DrawerNavigator from './DrawerNavigator';


export const ROUTES: Record<
  keyof RootStackParamList,
  {
    component: () => JSX.Element;
    title?: string;
  }
> = {
  BOTTOM_TAB:{
    component:BottomTabNavigator
  },
  HOME_SCREEN: {
    component: HomeScreen,
  },
  SETTINGS_SCREEN: {
    component: SettingsScreen,
  },
  SEARCH_SCREEN: {
    component: SearchScreen,
  },

  DRAWER_TAB:{
    component:DrawerNavigator
  },

  DETAILS_SCREEN: {
    component:DetailsScreen
  },
  



  
};

export const AUTH_ROUTES: Record<
  keyof RootStackParamList,
  {
    component: () => JSX.Element;
    title?: string;
  }
> = {
  LOGIN_SCREEN: {
    component: LoginScreen,
  },
  
};