import React from 'react';
import { ReactNode } from 'react';
import { View , StyleProp, ViewProps, ViewStyle } from 'react-native';
import { useTheme } from '@/components/common/ThemeContext';

interface CustomViewProps extends ViewProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const RNView = (props: CustomViewProps) => {
  const { theme } = useTheme();

  return (
    <View
      {...props}
      style={[{ backgroundColor: theme.backgroundColor }, props.style]}
    >
      {props.children}
    </View>
  );
};

export default RNView;



