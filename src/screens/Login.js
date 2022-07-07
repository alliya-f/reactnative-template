import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Textfield from '../components/Textfield';
import Button from '../components/Button';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {loginUser} from '../redux/thunks/appThunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {APP_ENVIRONMENT} from '@env';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
          }}>
          <View style={{padding: 5, marginTop: 50}}>
            <Text>Login</Text>
          </View>

          <View
            style={{
              padding: 15,
              justifyContent: 'space-around',
              alignContent: 'space-between',
              marginBottom: 40,
              marginTop: 40,
            }}>
            <Textfield title="Email " func={email => setEmail(email)} />
            <Textfield title="Password " func={pass => setPassword(pass)} />

            <Button
              label="Sign in"
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
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
