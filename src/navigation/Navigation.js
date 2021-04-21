import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home/Home';
import Register from '../screens/auth/Register';
import Login from '../screens/auth/Login';
import {Colors, Fonts} from '../constants/styleConstants';
import LogoutButton from '../components/logoutButton';

const Stack = createStackNavigator();
/**
 * app stacks
 * @return {JSX.Element}
 */
const Stacks = ({isLogin}) => {
  return (
    <Stack.Navigator
      initialRouteName={isLogin ? 'Home' : 'Login'}
      screenOptions={props => ({
        headerStyle: {backgroundColor: Colors.minColor},
        headerTitleStyle: {color: Colors.white, fontFamily: Fonts.medium},
        headerTintColor: Colors.white,
        headerRight: () =>
          props.route.name === 'Home' ? <LogoutButton {...props} /> : <></>,
      })}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

/**
 * initialize screens
 * @return {JSX.Element}
 */

const InitNavgtion = ({isLogin}) => {
  return (
    <NavigationContainer>
      <Stacks isLogin={isLogin} />
    </NavigationContainer>
  );
};

export default InitNavgtion;
