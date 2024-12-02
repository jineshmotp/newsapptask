import React from 'react';
import { StyleProp, Text, TextProps, TextStyle } from 'react-native';
import { useTheme } from '@/components/common/ThemeContext';

interface CustomTextProperty extends TextProps {
  text?: string;
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}

export const RNText = (props: CustomTextProperty) => {
  const { theme } = useTheme(); // Access theme using useTheme
  const { text, children, style = {}, ...rest } = props;

  const themeStyle: TextStyle = {
    color: theme.textColor, // Apply text color from the theme
  };

  const styles = [themeStyle, style]; // Combine theme styles with custom styles
  const content = text || children;

  return (
    <Text style={styles} {...rest}>
      {content}
    </Text>
  );
};
