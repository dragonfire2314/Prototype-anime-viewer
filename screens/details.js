import React, { useState } from 'react';
import { StyleSheet, FlatList, Text, View, Button, Image, ScrollView } from 'react-native';
import EpisodeCard from '../components/episodeCard'

const apiAddress = 'http://70.44.140.70:7777/episode';
async function getAnimeEpisodeUrl(query) {
  try {
    let res = await fetch(apiAddress, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ search: query})
    });
    let resJson = await res.json();
    return resJson;
  } catch (error) {
    console.error('Error is: ${error}');
  }
}

export default function Details({ navigation }) {

  onPressEpisode = (showID) => {
    getAnimeEpisodeUrl(showID).then((res) => {
      console.log(res[0].servers);
      navigation.push('PlayerSelection', {data: res[0]});
    });
  }

  let Image_Http_URL = { uri: navigation.getParam('data').img };

  return (
    <View style={styles.all}>
      <Text style={styles.title}>{navigation.getParam('data').title}</Text>
    
      <View style={styles.container}>
        <Image source={Image_Http_URL} style ={styles.image} />
        <View style={styles.textContainer}>
          <ScrollView style={styles.paraContainer}>
            <Text style={styles.para}>{navigation.getParam('data').synopsis}</Text>
          </ScrollView>
        </View>
      </View>

      <View style={styles.episodes}>
        <FlatList
          numColumns={4}
          keyExtractor={(item) => item.id}
          data={navigation.getParam('data').episodes}
          renderItem={({item}) => <EpisodeCard item={item} onPressEpisode={onPressEpisode}/>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  all: {
    flexDirection: 'column',
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    elevation: 4,
    borderRadius: 4,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    paddingVertical: 5,
    backgroundColor: '#BBDEFB',
    //borderBottomWidth: 1,
    //borderBottomColor: '#BDBDBD',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  para: {
    fontSize: 12,
  },
  image: {
    height: '95%', 
    resizeMode: 'stretch',
    flex: 1,
    margin: 6,
  },
  textContainer: {
    flex: 2,
  },
  paraContainer: {
    height: '30%',
    margin: 6,
  },
  episodes: {
    flexDirection: 'column',
    height: '100%',
    flex: 2,
  },
});