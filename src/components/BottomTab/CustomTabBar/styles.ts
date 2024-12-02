import {StyleSheet} from 'react-native';

import {colors, FONT, SIZES} from '@/theme';
import { px } from '@/utils';

export const styles = StyleSheet.create({
  tabBar: {
    position:'absolute',
    right:px(8),
    left:px(8),
    bottom:px(11),
    height:px(15),
    backgroundColor:colors.white,
    borderBottomLeftRadius:px(10),
    borderBottomRightRadius:px(10),
    shadowColor:colors.white,
    shadowOffset:{
      width:0,
      height:1,

    },
    shadowOpacity:px(0.25),
    shadowRadius:px(2),
    elevation:px(5),
  },
 
});
