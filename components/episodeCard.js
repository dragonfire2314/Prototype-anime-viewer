import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


export default function EpisodeCard({ item, onPressEpisode }) {

  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.body} onPress={() => onPressEpisode(item.id)}>
        <Text style={styles.title}>
          {(item.id).match(/\d+/)[0]/*This is used to extract the number from the id - There is a porblem for shows with numbers in the name...*/}
        </Text> 
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
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
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 12,
    textAlign: 'center',
  },
  image: {
    height: '100%', 
    resizeMode: 'stretch',
  },
  body: {
      //flex: 1,
  },
});