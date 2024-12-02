import { Container } from '@/custom/Container';
import { colors } from '@/theme';
import React from 'react';
import { View, Text } from 'react-native';


const ProfileScreen = () => {


  return (
    <Container hasHeader={true} backgroundColor={colors.altoShade} isTab={false}>
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>User Profile</Text>
    
    </View>
      </Container>
   
  );
};

export default ProfileScreen;