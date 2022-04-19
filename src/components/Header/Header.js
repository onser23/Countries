import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {headerStyles as styles} from './Styles';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Ölkə Seçimi</Text>

        <View style={styles.line} />

        <Text style={styles.subTitle}>ÖLKƏLƏR</Text>
      </View>
    );
  }
}

export default Header;
