import React, { memo, ReactElement } from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import { RNText } from '@/custom/RNText';
import RNView from '@/custom/RNView';

import { styles } from './styles';

type props = {
  backIcon?: ReactElement;
  backPress?: () => void;
  rightIcon?: ReactElement;
  rightPress?: () => void;
  label?: string;
  

};

const HeaderBar: React.FC<props> = ({
  backIcon,
  backPress,
  rightIcon,
  rightPress,
  label,
 
 
}) => {
  return (
    <RNView style={[styles.container, shadow ? styles.shadow : {}]}>
      <RNView style={styles.content}>
        <TouchableOpacity
          style={styles.leftButton}
          onPress={isDrawerOpen ? drawerToggle : backPress}>
          {isDrawerOpen ? (
            <Feather name="menu" size={24} color="#8E8E8E" />
          ) : (
            <Feather name="arrow-left" size={24} color="#8E8E8E" />
          )}
        </TouchableOpacity>

        <RNText style={styles.label}>{label}</RNText>

        {rightIcon ? (
          <TouchableOpacity style={styles.rightButton} onPress={rightPress}>
            {rightIcon}
          </TouchableOpacity>
        ) : (
          <RNView style={styles.placeholder} />
        )}
      </RNView>
    </RNView>
  );
};

export default memo(HeaderBar);
