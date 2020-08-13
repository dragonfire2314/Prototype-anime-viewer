import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import Details from '../screens/details'
import Player from '../screens/player'
import Header from '../shared/header'
import PlayerSelection from '../screens/playerSelection'

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title={'Home'} navigation={navigation} />
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

const HomeStack = createStackNavigator(screens);

export default HomeStack;