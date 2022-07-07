import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Core components
import Login from '../../screens/Login';

const AuthStack = createNativeStackNavigator();

const AuthStackScreens = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreens;
