import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.multiGet(['accessToken', 'refreshToken']).then(value => {
        const access = value[0][1];
        const refresh = value[1][1];

        if (access != null) {
          navigation.navigate('App');
        } else {
          navigation.navigate('Auth');
        }
      });
    }, 2000);
  }, []);
};

export default Splash;
