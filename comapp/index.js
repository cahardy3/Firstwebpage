

import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Header from './src/components/Header';
import ComicList from './src/components/ComicList';
import SearchBar from './src/components/SearchBar';


const Marvel = () => (
  <View style={{ flex:1 }}>
      <Header headerText={'comics'} /> 
      <SearchBar/>
  </View>
);

AppRegistry.registerComponent('comapp', () => Marvel);
