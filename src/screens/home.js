import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Button from '../components/Button';

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Home Screen</Text>
      </View>
      <View>
        <Button
          label="Log out"
          func={() => {
            dispatch(loginUser({username: email, password: password}));

            AsyncStorage.getItem('accessToken').then(val => {
              const access = val;
              if (access != null) {
                navigation.navigate('App');
              }
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default Home;
