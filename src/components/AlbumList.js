/**
 * AlbumList Class
 * @type {Class}
 * @author Yanuar Waskito
 */

import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';


class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((responseData) => this.setState({ albums: responseData }));
  }
  render() {
    const { albums } = this.state;
    return (
      <ScrollView>
        {albums &&
          albums.map((album, index) => (
              <Text key={`album.${index}`}>{album.title}</Text>
            ))
        }
      </ScrollView>
    );
  }
}

export default AlbumList;
