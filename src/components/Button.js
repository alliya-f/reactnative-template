import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const Button = props => {
  const buttonLabel = props.label;
  const buttonFunction = props.func;

  return (
    <TouchableOpacity
      disabled={props.disable}
      style={styles.button}
      onPress={buttonFunction}>
      <Text style={styles.label}>{buttonLabel}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 5,
    backgroundColor: '#3C4F4A',
    alignSelf: 'center',
    height: 35,
    width: 165,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Button;
