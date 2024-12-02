import {StyleSheet} from 'react-native';

import {colors, FONT, SIZES} from '@/theme';
import { deviceWidth, px } from '@/utils';

export const styles = StyleSheet.create({
  userBG: {
    height:px(140) 
   
  },
  userImage: {
    height:px(110),
    width:px(110),
    borderRadius:px(110)/2,
    position:'absolute',
    left:deviceWidth / 2.2 - px(110),
    bottom : px(-110) / 2,
    borderWidth:px(4),
    borderColor:colors.white
     
  },
  drawerListWrapper:
  {
    marginTop:px(110) / 2 + 10,
  },
  toggleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: px(20),
    paddingVertical: px(10),
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ccc',
    marginTop: px(10),
  },
  toggleText: {
    fontSize: px(16),
  },
});
