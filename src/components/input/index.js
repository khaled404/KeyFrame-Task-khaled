import React from 'react';
import PropTypes from 'prop-types';
import {View, TextInput} from 'react-native';
import {Colors} from '../../constants/styleConstants';
import styles from './styles';
const Input = ({
  options,
  contentContainerStyle,
  textInputContainer,
  leftContent,
  rightContent,
}) => {
  return (
    <View style={[styles.container, contentContainerStyle]}>
      {rightContent && <View style={styles.iconRight}>{rightContent()}</View>}
      <TextInput
        {...options}
        style={[
          styles.textInputContainer,
          textInputContainer,
          rightContent && {paddingRight: 50},
          leftContent && {paddingLeft: 50},
        ]}
        placeholderTextColor={Colors.grayDark}
      />
      {leftContent && <View style={styles.iconLeft}>{leftContent()}</View>}
    </View>
  );
};

Input.propTypes = {
  options: PropTypes.object,
  contentContainerStyle: PropTypes.any,
  textInputContainer: PropTypes.object,
  leftContent: PropTypes.element,
  rightContent: PropTypes.element,
};

export default Input;
