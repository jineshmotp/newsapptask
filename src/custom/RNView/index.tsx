import React from 'react';
import { ReactNode } from 'react';
import { View as RNView, StyleProp, ViewProps, ViewStyle } from 'react-native';
import { useTheme } from '@/components/common/ThemeContext';

interface CustomViewProps extends ViewProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const CustomView = (props: CustomViewProps) => {
  const { theme } = useTheme();

  return (
    <RNView
      {...props}
      style={[{ backgroundColor: theme.backgroundColor }, props.style]}
    >
      {props.children}
    </RNView>
  );
};

export default CustomView;



