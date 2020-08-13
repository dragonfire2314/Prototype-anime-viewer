import React, { useState } from 'react';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';
import ItemCard from './itemCard'

export default function Search({ shows, onItemCardPress }) {

  

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={shows}
        renderItem={({item}) => <ItemCard show={item} onItemCardPress={onItemCardPress}/>}
      />
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
  }
});