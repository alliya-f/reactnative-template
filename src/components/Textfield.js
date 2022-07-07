import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Textfield = props => {
  return (
    <View style={styles.textfield}>
      <TextInput
        autoCapitalize={false}
        editable={!props.disable}
        placeholder={props.title}
        placeholderTextColor="#536462"
        style={{
          alignSelf: 'center',
          height: 40,
          width: 250,
          fontSize: 16,
          color: 'black',
        }}
        onChangeText={props.func}
      />
    </View>
  );
};

export default Textfield;

const styles = StyleSheet.create({
  textfield: {
    width: 250,
    height: 30,
    borderBottomColor: '#9A9D9B',
    borderBottomWidth: 1,
    fontSize: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'center',
    padding: 2,
    marginBottom: 50,
  },
  textfieldTitle: {
    fontSize: 16,
    color: '#536462',
  },
});
