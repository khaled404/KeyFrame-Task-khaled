import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import Touchable from './Touchable';
import {Colors, Fonts} from '../../constants/styleConstants';
import {PixelPerfect} from '../../constants/styleConstants';
import PropTypes from 'prop-types';

const Button = ({
  dark,
  onPress,
  title,
  style,
  styleTitle,
  children,
  loader,
}) => {
  return (
    <Touchable dark={dark} onPress={onPress}>
      <View style={[styles.container, style]}>
        {children}
        {loader ? (
          <ActivityIndicator
            style={{
              width: PixelPerfect(30),
              height: PixelPerfect(30),
              marginRight: 4,
            }}
            size="small"
            color="white"
          />
        ) : (
          <Text style={[styles.title, styleTitle]}>{title}</Text>
        )}
      </View>
    </Touchable>
  );
};

Button.propTypes = {
  dark: PropTypes.bool,
  onPress: PropTypes.func,
  title: PropTypes.string,
  style: PropTypes.object,
  styleTitle: PropTypes.object,
  children: PropTypes.element,
  loader: PropTypes.bool,
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: PixelPerfect(100),
    backgroundColor: Colors.minColor,
    borderRadius: PixelPerfect(20),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  title: {
    color: Colors.white,
    fontFamily: Fonts.medium,
    fontSize: PixelPerfect(25),
  },
});
