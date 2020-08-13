import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Search from '../screens/search'
import Details from '../screens/details'
import Player from '../screens/player'
import Header from '../shared/header'
import PlayerSelection from '../screens/playerSelection'

const screens = {
  Search: {
    screen: Search,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title={'Search'} navigation={navigation} />
      }
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      headerStyle: { backgroundColor: '#2196F3' },
    }
  },
  PlayerSelection: {
    screen: PlayerSelection,
    navigationOptions: {
      headerStyle: { backgroundColor: '#2196F3' },
    }
  },
  Player: {
    screen: Player,
    navigationOptions: {
      headerStyle: { backgroundColor: '#2196F3' },
    }
  },
};

const SearchStack = createStackNavigator(screens);

export default SearchStack;