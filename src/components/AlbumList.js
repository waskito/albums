/**
 * AlbumList Class
 * @type {Class}
 * @author Yanuar Waskito
 */

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';


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
              <AlbumDetail
                key={`album.${index}`}
                album={album}
              />
            ))
        }
      </ScrollView>
    );
  }
}

export default AlbumList;
