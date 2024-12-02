import { Container } from '@/custom/Container';
import { colors } from '@/theme';
import React from 'react';
import { View, Text } from 'react-native';


const DetailsScreen = () => {


  return (
    <Container hasHeader={true} backgroundColor={colors.altoShade} isTab={false}>
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
    
    </View>
      </Container>
  );
};

export default DetailsScreen;