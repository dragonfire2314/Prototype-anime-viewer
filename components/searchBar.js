import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Search({ onPress }) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='eg. One piece'
        onChangeText={changeHandler}
      />
      <View style={styles.button}>
        <Button title='Search' onPress={() => onPress(text)}/>
      </View>
      <View
        style={{
          borderBottomColor: '#BDBDBD',
          borderBottomWidth: 1,
          marginVertical: 8,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: '#BDBDBD',
    //borderStyle: 'solid',
    //borderLeftWidth: 1,
    //borderRightWidth: 1,
    //borderBottomWidth: 2,
    borderRadius: 5,
    elevation: 4,
  },
  button: {
    marginHorizontal: 16,
  },
});