

import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation-stack';
import Header from './src/components/Header';
import ComicList from './src/components/ComicList';
import SearchBar from './src/components/SearchBar';

const navigator = createStackNavigator(
  {
    Home: SearchBar,
    List: ComicList
  },
  {
    initialRouteName: 'SearchBar',
    defaultNavigationOptions: {
      title: 'Marvel'
    }
  }
);

export default createAppContainer(navigator);
