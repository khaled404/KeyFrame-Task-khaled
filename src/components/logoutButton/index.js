import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {clearStorage} from '../../constants/helpers';
import {Colors} from '../../constants/styleConstants';

const LogoutButton = () => {
  const {reset} = useNavigation();
  return (
    <TouchableOpacity
      style={{paddingHorizontal: 20}}
      onPress={() => {
        reset({index: 0, routes: [{name: 'Login'}]});
        clearStorage();
      }}>
      <Text style={{color: Colors.white, fontSize: 15}}>Logout</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;
