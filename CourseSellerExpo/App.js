import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Category from '../CourseSellerExpo/components/Category';

export default function App() {
  return (
    <View style={styles.container}>
      <Category title="Spike Prime" />
      <Category title="MindStorms" />
      <Category title="Arduino" />
      <Category title="Python" />
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
