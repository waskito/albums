/**
 * AlbumList Class
 * @type {Class}
 * @author Yanuar Waskito
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';


class AlbumList extends Component {
  componentWillMount() {
    console.log('AlbumList willMount!');
  }
  render() {
    return (
      <View>
        <Text>Album List!!</Text>
      </View>
    );
  }
}

export default AlbumList;
