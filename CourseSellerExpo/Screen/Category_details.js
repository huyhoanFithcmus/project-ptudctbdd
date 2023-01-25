import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Category_list from '../components/Category_list';


export default function Category_details(props) {
  // navigation options
  props.navigation.setOptions({
    title: props.route.params.categoryName,
  });

  return (
    <View style={styles.container}>
        {/* <Text style={styles.Text}>{props.route.params.categoryName}</Text> */}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    
  },
  Text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },

});
