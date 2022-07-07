import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from 'react-native-splash-screen';

// Core components
import AuthStackScreens from './stacks/AuthStack';
import AppStackScreens from './stacks/AppStack';
import Splash from '../screens/Splash.js';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="splash">
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="Auth" component={AuthStackScreens} />
        <Stack.Screen name="App" component={AppStackScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
