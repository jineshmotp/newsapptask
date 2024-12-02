import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Svg, {Path} from 'react-native-svg';
import {colors} from '@/theme';
import { px } from '@/utils';

const CustomTabBarButton = props => {
  const {route, children, accessibilityState, onPress} = props;

  if (accessibilityState.selected) {
    return (
      <View style={styles.btnWrapper}>
        <View style={{flexDirection: 'row'}}>
          <View style={[styles.svgGapFiller,{
            borderTopLeftRadius:route === 'HomeScreen' ? px(10):0
          }]} />

          <Svg width={px(55)} height={px(47)} viewBox="0 0 74 63">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={colors.white}
            />
          </Svg>

          <View style={[styles.svgGapFiller,{
            borderTopRightRadius:route === 'SettingsScreen' ? px(10):0
          }]} />

        </View>

        <TouchableOpacity onPress={onPress} style={[styles.activeBtn,{

        }]}>
          <Text>{children}</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <>
   

        <TouchableOpacity activeOpacity={1} onPress={onPress} style={[styles.InactiveBtn,{
          borderTopLeftRadius:route === 'HomeScreen' ? px(10):0,
          borderTopRightRadius:route === 'SettingsScreen' ? px(10):0

        }]}>
          <Text>{children}</Text>
        </TouchableOpacity>
      </>
    );
  }
};

export default CustomTabBarButton;
