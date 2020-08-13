import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


export default function PlayerCard({ item, onPressPlayer }) {

  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.body} onPress={() => onPressPlayer(item.iframe)}>
        <Text style={styles.title}>{item.name}</Text> 
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFFFFF',
    height: 50,
    marginVertical: 8,
    marginHorizontal: 5,
    borderColor: '#BDBDBD',
    //borderStyle: 'solid',
    //borderLeftWidth: 1,
    //borderRightWidth: 1,
    //borderBottomWidth: 2,
    borderRadius: 5,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
});