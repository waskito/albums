/**
 * AlbumDetail Component
 */

import React from 'react';
import {
  Image,
  Linking,
  Text,
  View
} from 'react-native';
import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({album}) => {
  const {
    artist,
    image,
    title,
    thumbnail_image,
    url
  } = album;
  const {
    headerContentStyle,
    headerTextStyle,
    imageStyle,
    thumbnailStyle,
    thumbnailContainerStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            source={{ uri: thumbnail_image }}
            style={thumbnailStyle}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          source={{ uri: image }}
          style={imageStyle}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)} >
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  imageStyle:{
    height: 300,
    flex: 1,
    width: null
  },
  headerTextStyle:{
    fontSize: 18
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
};

export default AlbumDetail;
