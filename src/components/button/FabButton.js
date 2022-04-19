import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../../config/Colors';
import Refresh from '../../assets/icons/Refresh';

class FabButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.tauchable}>
          <View style={styles.tauchableContent}>
            <Refresh tintColor="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 56,
    height: 56,
    backgroundColor: Colors.accent,
    borderRadius: 28,
    overflow: 'hidden',
    elevation: 10,
    alignSelf: 'flex-end',
  },

  tauchable: {
    flex: 1,
    alignSelf: 'stretch',
  },

  tauchableContent: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FabButton;
