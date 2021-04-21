import React from 'react';
import {ScrollView, View} from 'react-native';
import {Colors} from '../../constants/styleConstants';
import PropTypes from 'prop-types';

export const Container = ({children, style}) => {
  return (
    <View
      style={[{flex: 1, backgroundColor: Colors.appBackgroundColor}, style]}>
      {children}
    </View>
  );
};
Container.propTypes = {
  style: PropTypes.object,
};

export const Content = ({
  children,
  noPadding,
  contentContainerStyle,
  paddingVertical,
  options,
}) => {
  return (
    <ScrollView
      contentContainerStyle={[
        paddingVertical && {paddingVertical: 30},
        contentContainerStyle,
      ]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      {...options}>
      <View style={{paddingHorizontal: noPadding ? undefined : 15}}>
        {children}
      </View>
    </ScrollView>
  );
};
Container.propTypes = {
  noPadding: PropTypes.bool,
  contentContainerStyle: PropTypes.object,
  paddingVertical: PropTypes.bool,
  options: PropTypes.object,
};
