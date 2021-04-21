import React from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const {OS} = Platform;
const ANDROID = 'android';

const TouchableType =
  OS === ANDROID ? TouchableNativeFeedback : TouchableOpacity;

const Touchable = ({dark, onPress, children}) => {
  return (
    <TouchableType
      onPress={onPress}
      background={
        OS === ANDROID
          ? TouchableNativeFeedback.Ripple(dark ? '#0000007a' : '#ffffff66')
          : undefined
      }>
      {children}
    </TouchableType>
  );
};

Touchable.propTypes = {
  dark: PropTypes.bool,
  onPress: PropTypes.func,
  children: PropTypes.element,
};

export default Touchable;
