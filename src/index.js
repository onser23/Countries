import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Home from './screens/Home/Home';
import CountryDetails from './screens/CountryDetails/CountryDetails';
import CountryObjects from './screens/Home/CountryObjects';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

class Index extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Ölkə Haqqında" component={CountryDetails} />
            <Stack.Screen name="CountryObjects" component={CountryObjects} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

export default Index;
