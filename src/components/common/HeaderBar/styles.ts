import { Platform, StyleSheet } from 'react-native';

import { FONT, SIZES } from '@/theme';
import { deviceWidth, px } from '@/utils';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: Platform.OS === 'android' ? 0.1 : 0.3,
    shadowRadius: 6,
    shadowColor: 'gray',
    elevation: 5,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  leftButton: {
    padding: 8,
  },
  rightButton: {
    padding: 8,
  },
  label: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  placeholder: {
    width: 24, // Maintains alignment if rightIcon is missing
  },
});
