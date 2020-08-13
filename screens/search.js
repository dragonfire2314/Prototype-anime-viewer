import React, { useState } from 'react';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';
import ShowList from '../components/showList'
import SearchBar from '../components/searchBar'

const apiAddress = 'http://70.44.140.70:7777/search';
async function getAnimeSearch(query) {
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

export default function Search({ navigation }) {

  const [shows, setShows] = useState();

  const onPress = (query) => {
    console.log(query);
    getAnimeSearch(query).then(res =>{
      showHandler(res);
    });
  }

  const showHandler = (list) => {
    //Delete Items
    setShows((prevTodo) => {
      return [
        //{
          //id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          //title: 'Sample Show',
          //img: 'https://res.cloudinary.com/teepublic/image/private/s--1gPQ_Wzg--/c_fit,g_north_west,h_732,w_840/co_000000,e_outline:40/co_000000,e_outline:inner_fill:1/co_ffffff,e_outline:40/co_ffffff,e_outline:inner_fill:1/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1543411332/production/designs/3599825_1.jpg',
          //synopsis: 'synopsis',
          //genres: 'genres',
          //released: 'released',
          //status: 'status',
          //otherName: 'otherName',
          //totalEpisodes: '0',
          //episodes: 'episodes',
        //},
      ]
    });
    //Repopulate items
    list.forEach(element => {
      setShows((prevTodo) => {
        return [
          { title: element.title, 
            id: Math.random().toString(),
            img: element.img,
            synopsis: element.synopsis,
            genres: element.genres,
            released: element.released,
            status: element.status,
            otherName: element.otherName,
            totalEpisodes: element.totalEpisodes,
            episodes: element.episodes,
          },
          ...prevTodo
        ]
      });
    });  
  }

  const onItemCardPress = (name) => {
    console.log(name.title);
    navigation.push('Details', {data: name});
  }

  return (
    <View style={styles.container}>
      <SearchBar onPress={onPress}/>
      <View style={styles.list}>
        <ShowList shows={shows} onItemCardPress={onItemCardPress}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});