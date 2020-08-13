import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Video } from 'expo-av';

export default function Player({ navigation }) {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: 'https://www13.mp4upload.com:282/d/q2xuw3bxz3b4quuo5wwuyjc2k7zdfsdp7j5q3subp5jq6cmdmqj3vwgn/video.mp4' }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        useNativeControls={true}
        shouldPlay
        isLooping
        style={styles.video}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%', 
    height:'100%',
  },
});