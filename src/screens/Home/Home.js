import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import {Header} from '../../components/Index';
import CountryObjects from './CountryObjects';

const Home = ({navigation}) => {
  return (
    <View>
      <ScrollView>
        <Header />

        <CountryObjects />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    width: '100%',
    height: 1,
    marginTop: 25,
    marginBottom: 5,
    backgroundColor: 'gray',
  },

  fabButtonn: {
    position: 'relative',
    bottom: 96,
    end: 36,
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    height: 500,
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
  },
});
export default Home;
