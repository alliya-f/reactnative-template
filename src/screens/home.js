import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../components/Button';
import {logOut} from '../redux/slices/appSlice';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.app);

  if (!user) {
    navigation.navigate('Auth');
  }

  return (
    <SafeAreaView>
      <View>
        <Text>Home Screen</Text>
      </View>
      <View>
        <Button
          label="Log out"
          func={() => {
            dispatch(logOut());
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default Home;
