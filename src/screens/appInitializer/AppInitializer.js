import React from 'react';
import {useGetUserData} from '../../constants/helpers';
import InitNavgtion from '../../navigation/Navigation';
import Splash from './Splash';
const AppInitializer = () => {
  const userData = useGetUserData();
  if (userData !== undefined) {
    return <InitNavgtion isLogin={!!userData} />;
  } else {
    return <Splash />;
  }
};

export default AppInitializer;
