import React from 'react';
import {View, Text} from 'react-native';
import {Colors, Fonts, PixelPerfect} from '../../constants/styleConstants';

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.minColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: Fonts.bold,
          fontSize: PixelPerfect(80),
          color: Colors.white,
        }}>
        Splash
      </Text>
    </View>
  );
};

export default Splash;
