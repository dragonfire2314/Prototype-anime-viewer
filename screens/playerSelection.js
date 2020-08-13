import React, { useState } from 'react';
import { StyleSheet, FlatList, Text, View, Button, Image, ScrollView } from 'react-native';
import PlayerCard from '../components/playerCard'

const apiAddress = 'http://70.44.140.70:7777/decode/Mp4Upload';
async function decodeAnimeEpisodeUrl(query) {
  try {
    let res = await fetch(apiAddress, {
      headers: {
        'Content-Type': 'text/html'
      },
      method: 'POST',
      body: JSON.stringify({ search: query})
    });
    //let resJson = await res.json();
    return await res;
  } catch (error) {
    console.error('Error is: ' + error);
  }
}

export default function PlayerSelection({ navigation }) {

  const onPressPlayer = (iframe) => {
    decodeAnimeEpisodeUrl(iframe).then((res) => {
      //console.log(res);
      navigation.push('Player', {url: res});
    });
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.iframe}
        data={navigation.getParam('data').servers}
        renderItem={({item}) => <PlayerCard item={item} onPressPlayer={onPressPlayer}/>
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});