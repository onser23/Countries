import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import {searchInputStyles as styles} from './Styles';

class SearchInput extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Ölkənin adı"
          onChangeText={text => this.props.onChangeText(text)}
        />
      </View>
    );
  }
}
export default SearchInput;
