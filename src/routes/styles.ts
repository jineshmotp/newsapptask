import {StyleSheet} from 'react-native';

import {colors, FONT, SIZES} from '@/theme';

export const styles = StyleSheet.create({
  tabBarStyle: {
    // flex:1,
    position: 'absolute',
    backgroundColor: colors.transparent, // Ensure transparency
    borderTopWidth: 0,
    elevation: 0,
    bottom:0,
    height: 118,
    right: 10,
    left: 10,
  

    justifyContent: 'center', // Centers content vertically
    alignItems: 'center',
    alignContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }



});
