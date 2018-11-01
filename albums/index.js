/** @format */

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//create component
const App = () => (
    <View>
    <Header headerText={'albums'} /> 
    <AlbumList />
    </View>
);

AppRegistry.registerComponent('albums', () => App);
