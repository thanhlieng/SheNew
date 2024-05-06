/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LoginScreen from './src/Screens/authentication/login';
import Toast from 'react-native-toast-message';
import PreLoginScreen from './src/Screens/authentication/pre-login';
import {AppNavigator} from './src/Navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppNavigator />
      <Toast />
    </SafeAreaProvider>
  );
};

export default App;
