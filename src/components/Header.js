import React from 'react';
import { Text, View } from 'react-native';

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    width: '100%'
  },
  textStyle: {
    fontSize: 20,
    color: '#146fb4'
  }
};

const Header = ({ headerText }) => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{headerText}</Text>
  </View>
);

export default Header;