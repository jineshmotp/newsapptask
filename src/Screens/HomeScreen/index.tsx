import {Container} from '@/custom/Container';
import React, {useState} from 'react';
import {KeyboardAvoidingView, Text, View} from 'react-native';

import {styles} from './styles';
import RNView from '@/custom/RNView';
import {colors} from '@/theme';
import HeaderBar from '@/components/common/HeaderBar';
import {useTheme} from '@/components/common/ThemeContext';

const HomeScreen = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const {theme} = useTheme();

  // Determine background color based on the current theme
  const backgroundColor = theme?.isDarkTheme ? colors?.black : colors.blue.$500;

  return (
    <Container hasHeader={true} backgroundColor={backgroundColor} isTab={false}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={'height'}
        enabled>
        {/* <HeaderBar
          isDrawerOpen={true}
          drawerToggle={() => console.log('Drawer opened')}
          label="Home"
          shadow={true}
        /> */}
        <RNView style={[styles.mainview, {backgroundColor}]}>
          <Text>Home Screen</Text>
        </RNView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default HomeScreen;
