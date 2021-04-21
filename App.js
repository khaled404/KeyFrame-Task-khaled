/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import FlashMessage from 'react-native-flash-message';
import {Fonts, ScreenOptions} from './src/constants/styleConstants';
import AppInitializer from './src/screens/appInitializer/AppInitializer';

const queryClient = new QueryClient({
  defaultOptions: {queries: {cacheTime: 50000}},
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      <AppInitializer />
      <FlashMessage
        position="top"
        hideOnPress={true}
        style={{paddingTop: ScreenOptions.StatusBarHeight}}
        titleStyle={{
          fontFamily: Fonts.medium,
          paddingTop: ScreenOptions.StatusBarHeight,
        }}
        textStyle={{
          fontFamily: Fonts.medium,
        }}
      />
    </QueryClientProvider>
  );
};

export default App;
