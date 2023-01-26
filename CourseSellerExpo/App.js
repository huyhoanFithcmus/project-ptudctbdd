import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import React from 'react';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './AppNavigator';

axios.defaults.baseURL = 'http://localhost:3001';

const AppContainer = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default function Category() {
  return (
    <View style={styles.container}>
        <AppContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 16,
  },
});
