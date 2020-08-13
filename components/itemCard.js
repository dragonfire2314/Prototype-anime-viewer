import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function ItemCard({ show, onItemCardPress }) {

  let Image_Http_URL = { uri: show.img };

  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.body} onPress={() => onItemCardPress(show)}>
        <Image source={Image_Http_URL} style ={styles.image} />
        <Text style={styles.title}>{show.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 20,
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
  title: {
    fontSize: 32,
    textAlign: 'center',
    flex: 3,
  },
  image: {
    height: '100%', 
    resizeMode: 'stretch',
    flex: 1,
  },
  body: {
    flexDirection: 'row'
  },
});