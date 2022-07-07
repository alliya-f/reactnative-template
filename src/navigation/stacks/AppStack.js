import React from 'react';
import {View} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Core components
import Home from '../../screens/home';

const AppStack = createNativeStackNavigator();

const AppStackScreens = () => {
  return (
    <AppStack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="home" component={Home} />
    </AppStack.Navigator>
  );
};

export default AppStackScreens;
