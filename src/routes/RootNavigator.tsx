import { useEffect, useState } from 'react';
import { useToast } from 'react-native-toast-notifications';


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import Loader from '@/components/common/Loader';
import { useAppSelector } from '@/hooks/reduxHooks';
import { getLoginStatus } from '@/redux/login/loginReducer';
import { useGetUserDataQuery, useLazyGetRefreshTokenQuery } from '@/redux/login/loginService';

import DrawerNavigator from '@/Screens/DrawerNavigator';

import { getMMKVItem, MMKV_KEYS, setMMKVItem } from '../utils/mmkv';
import { AUTH_ROUTES, ROUTES } from './routes';

export type RootStackParamList = {

  LOGIN:undefined;
  DRAWER_TAB:undefined;
  BOTTOM_TAB:undefined;
  HOME_SCREEN:undefined;
  SETTINGS_SCREEN:undefined;
  SEARCH_SCREEN:undefined;
  DETAILS_SCREEN:undefined;
  
};


const Stack = createNativeStackNavigator();
const NonAuthStack = createNativeStackNavigator<RootStackParamList>();
const AuthStack = createNativeStackNavigator<RootStackParamList>();

const NonAuthStackNavigator = () => {
  return (
    <NonAuthStack.Navigator initialRouteName="DRAWER_TAB">
      {Object.entries(ROUTES).map(([name, route]) => (
        <NonAuthStack.Screen
          key={name}
          name={name as keyof RootStackParamList}
          options={{
            headerShown: false,
          }}
          getComponent={() => route.component}
        />
      ))}
    </NonAuthStack.Navigator>
  );
};
const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName="DRAWER_TAB">
      {Object.entries(ROUTES).map(([name, route]) => (
        <AuthStack.Screen
          key={name}
          name={name as keyof RootStackParamList}
          options={{
            headerShown: false,
          }}
          getComponent={() => route.component}
        />
      ))}



<Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Main">
        <Stack.Screen name="Main" component={DrawerNavigator} />
      </Stack.Navigator>
    </AuthStack.Navigator>
  );
};

export function RootNavigator(): JSX.Element {

  const toast = useToast();


  const loginStatus = useAppSelector(getLoginStatus);
  const token = getMMKVItem(MMKV_KEYS.ACCESS_TOKEN);
  const refreshToken = getMMKVItem(MMKV_KEYS.REFRESH_TOKEN);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loginAccess, setLoginAccess] = useState<boolean>(false);
  const isShowOnBoarding = !!token;

  const { isLoading: userLoading } = useGetUserDataQuery({}, { skip: !(isShowOnBoarding && loginAccess) });

  const [refreshTokenData, { isLoading: refreshLoading }] = useLazyGetRefreshTokenQuery();

  const getRefreshTokenFn = (access, refresh) => {
    refreshTokenData({}).then(apiRes => {
     
      if (apiRes?.data?.status) {
        setMMKVItem(MMKV_KEYS.ACCESS_TOKEN, apiRes.data.access_token);
        setMMKVItem(MMKV_KEYS.REFRESH_TOKEN, apiRes.data.refresh_token);
        setIsLoading(false);
        setLoginAccess(true);
      } else {
        if (apiRes?.error?.status === false) {
          // console.log('userData+++++++++++++++', access);
          setMMKVItem(MMKV_KEYS.ACCESS_TOKEN, access);
          setMMKVItem(MMKV_KEYS.REFRESH_TOKEN, refresh);
          setIsLoading(false);
          setLoginAccess(true);
         
        }
      }
    });
  };

  const isTokenExpired = tokenAcc => {
    setIsLoading(true);
    // console.log('refreeeeee', refreshToken);
    setMMKVItem(MMKV_KEYS.ACCESS_TOKEN, refreshToken);
    setTimeout(() => getRefreshTokenFn(tokenAcc, refreshToken), 1000);
  };

  useEffect(() => {
    // console.log('useEffect++++', isLoading, token);
    if (token) {
      // isTokenExpired(token);
      setLoginAccess(true);
    } else {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    setLoginAccess(loginStatus);
  }, [loginStatus]);

  if (isLoading || userLoading || refreshLoading) {
    return <Loader size={'large'} />;
  }

 

  return (
    <NavigationContainer>


{isShowOnBoarding && loginAccess ? <AuthStackNavigator /> : <NonAuthStackNavigator />}
    </NavigationContainer>
  );
};

