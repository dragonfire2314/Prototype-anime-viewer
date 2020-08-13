import React, { useState } from 'react';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';

export default function Home({ navigation }) {

  const pressHandler = () => {
    navigation.push('Player');
  }

  return (
    <View style={styles.container}>
      <Button title='Goto player' onPress={pressHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 100,
  },
});