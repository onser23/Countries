import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';

const CountryDetails = ({route}) => {
  const countryName = route.params.country.name;
  const countryCapital = route.params.country.capital;
  const countryRegion = route.params.country.subregion;
  const countryPopulation = route.params.country.population;
  const countryCurrencyCode = route.params.country.currencies[0].code;
  const countryCurrencySymbol = route.params.country.currencies[0].symbol;
  const countryNativeName = route.params.country.nativeName;
  const countryLanguages = route.params.country.languages[0].nativeName;
  const countryCallingCodes = route.params.country.callingCodes;
  const countryTopLevelDomain = route.params.country.topLevelDomain;
  const countryFlag = route.params.country.flags.png;
  console.log(countryFlag);

  return (
    <View style={styles.container}>
      <View style={styles.headText}>
        <Text style={styles.countryText}>{countryName}</Text>
      </View>

      <Grid>
        <Col size={50}>
          <Row style={styles.cell}>
            <Text style={styles.texts}>Paytaxt</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.texts}>Region</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.texts}>Əhali</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.texts}>Valyuta</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.texts}>Valyuta simvol</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.texts}>Öz dilində adı</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.texts}>Rəsmi dili</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.texts}>Zəng kodu</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.texts}>Domen</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.texts}>Bayraq</Text>
          </Row>
        </Col>
        <Col size={50}>
          <Row style={styles.cell}>
            <Text style={styles.texts}>{countryCapital}</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.texts}>{countryRegion}</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.texts}>{countryPopulation}</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.texts}>{countryCurrencyCode}</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.texts}>{countryCurrencySymbol}</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.texts}>{countryNativeName}</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.texts}>{countryLanguages}</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.texts}>+{countryCallingCodes}</Text>
          </Row>
          <Row style={styles.cell}>
            <Text style={styles.texts}>{countryTopLevelDomain}</Text>
          </Row>
          <Row style={styles.cell}>
            <Image style={styles.flags} source={{uri: countryFlag}} />
          </Row>
        </Col>
      </Grid>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 570,
    padding: 16,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  cell: {
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headText: {
    marginBottom: 25,
  },
  countryText: {
    alignSelf: 'center',
    fontSize: 25,
  },
  flags: {
    width: 50,
    height: 30,
    margin: 0,
    padding: 0,
  },
  texts: {
    fontSize: 18,
  },
});

export default CountryDetails;
