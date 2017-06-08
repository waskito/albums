/**
 * App is main class of ios app of this albums's app
 * @type {Class}
 */

import React from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import AlbumList from './src/components/AlbumList';
import Header from './src/components/Header';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};

AppRegistry.registerComponent('albums', () => App);
