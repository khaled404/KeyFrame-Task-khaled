import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home/Home';
import {Colors, Fonts} from '../constants/styleConstants';

const Stack = createStackNavigator();
/**
 * app stacks
 * @return {JSX.Element}
 */
const Stacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

/**
 * initialize screens
 * @return {JSX.Element}
 */

const InitNavgtion = () => {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
};

export default InitNavgtion;
