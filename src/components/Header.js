/**
 * Header for navbar header of this app.
 *
 * @type {Class}
 * @author Yanuar Waskito (yg.waskito@gmail.com)
 *
 */

import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Header = (props) => {
  const {
    textStyle,
    viewStyle
  } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{ props.headerText }</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};


export default Header;
