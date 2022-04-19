import React, {useEffect, useState} from 'react';
import {SearchInput} from '../../components/Index';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import axios from 'axios';
import {Colors} from '../../config/Colors';
import Arrow from '../../assets/icons/Arrow';
import {useNavigation} from '@react-navigation/native';

const CountryObjects = () => {
  const navigation = useNavigation();
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState('');

  const [countriesFilter, setCountriesFilter] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all').then(({data}) => {
      setCountries(data);
    });
  }, []);

  const searcButton = () => {
    // console.warn('AAA');
  };

  const searchInput = text => {
    setSearchText(text);
    const textUpper =
      text.slice(0, 1).toUpperCase() + text.slice(1, text.length);

    const newItem = countries.filter(newVal => {
      return newVal.name === textUpper;
    });
    if (newItem.length > 0) {
      setCountriesFilter(newItem);
    } else {
      setCountriesFilter(newItem);
    }
    console.log(newItem.length);
  };

  const countryName = 'Olke adi';
  return (
    <View>
      <SearchInput onChangeText={searchInput} onPress={searcButton} />
      <View style={styles.line} />

      {countriesFilter == '' ? (
        <FlatList
          initialNumToRender={5}
          windowSize={10}
          removeClippedSubviews={true}
          data={countries}
          style={{marginBottom: 35}}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Ölkə Haqqında', {country: item})
              }
              style={styles.container}>
              <View style={styles.contentContainer}>
                <View style={styles.countryFlag}>
                  <Image style={styles.flags} source={{uri: item.flags.png}} />
                </View>
                <Text style={styles.countryName}>{item.name}</Text>
                <Arrow />
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.name}
        />
      ) : (
        <FlatList
          initialNumToRender={5}
          windowSize={10}
          removeClippedSubviews={true}
          data={countriesFilter}
          style={{marginBottom: 35}}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Ölkə Haqqında', {country: item})
              }
              style={styles.container}>
              <View style={styles.contentContainer}>
                <View style={styles.countryFlag}>
                  <Image style={styles.flags} source={{uri: item.flags.png}} />
                </View>
                <Text style={styles.countryName}>{item.name}</Text>
                <Arrow />
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.name}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingHorizontal: 12,
    height: 40,
  },

  countryName: {
    flex: 1,
    marginStart: 12,
    color: Colors.text_color,
    fontSize: 17,
  },

  countryFlag: {
    width: 40,
    height: 30,
    borderRadius: 4,
  },
  flags: {
    width: 40,
    height: 30,
  },

  line: {
    width: '100%',
    height: 1,
    marginTop: 25,
    marginBottom: 5,
    backgroundColor: 'gray',
  },
});

export default CountryObjects;
