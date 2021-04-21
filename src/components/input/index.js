import React from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, Text} from 'react-native';
import {Colors} from '../../constants/styleConstants';
import styles from './styles';
const Input = ({
  options,
  contentContainerStyle,
  textInputContainer,
  leftContent,
  rightContent,
  erorrMessage,
}) => {
  return (
    <>
      <View
        style={[
          styles.container,
          contentContainerStyle,
          !!erorrMessage && {borderColor: Colors.warning},
        ]}>
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
      <View style={{marginVertical: 5}}>
        <Text
          style={[
            styles.errorMessage,
            {color: !!erorrMessage ? Colors.warning : 'transparent'},
          ]}>
          {erorrMessage}
        </Text>
      </View>
    </>
  );
};

Input.propTypes = {
  options: PropTypes.object,
  contentContainerStyle: PropTypes.object,
  textInputContainer: PropTypes.object,
  leftContent: PropTypes.element,
  rightContent: PropTypes.element,
  erorrMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default Input;
