import {StyleSheet} from 'react-native';

import {colors, FONT, SIZES} from '@/theme';
import { px } from '@/utils';


export const styles = StyleSheet.create({
  btnWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },

  activeBtn: {
    flex: 1,
    position: 'absolute',
    backgroundColor: colors.white,
    
    top: px(6),
    width: px(40),
    height: px(40),
    borderRadius: px(50) / 2,
  
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    elevation: 5, // Android shadow
  
    borderColor: colors.primary,
    borderWidth: 0.2,
  
    // Shadow for iOS
    shadowColor: colors.black, // Shadow color
    shadowOffset: {
      width: 0, // Horizontal offset
      height: 2, // Vertical offset
    },
    shadowOpacity: 0.25, // Opacity of the shadow
    shadowRadius: 3.84, // How blurred the shadow is
  },
  
  InactiveBtn: {
    flex: 1,
    height: px(45),
    bottom: px(-24),

    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  svgGapFiller: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
