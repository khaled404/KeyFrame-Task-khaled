import React from 'react';
import {StyleSheet, View} from 'react-native';
import Touchable from './Touchable';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';

const IconTouchable = ({color, size, name, style, onPress, iconStyle}) => {
  return (
    <View style={[styles.container, style]}>
      <Touchable onPress={onPress}>
        <View style={[styles.iconContainer, iconStyle]}>
          <Icon name={name} size={size} color={color} />
        </View>
      </Touchable>
    </View>
  );
};

IconTouchable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  name: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.func,
  iconStyle: PropTypes.object,
};

export default IconTouchable;

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
