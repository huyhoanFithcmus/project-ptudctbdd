import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

import Category_list from '../../CourseSellerExpo/components/Category_list';
import React from 'react';

// navigate the category to the category details
export default function Category(props) {
  const categories = [
    { id: 1, name: "Spike Prime" },
    { id: 2, name: "Scratch" },
    { id: 3, name: "Mindstorms" },
    { id: 4, name: "Wedo" },
    { id: 5, name: "EV3" },
    { id: 6, name: "Arduino" },
    { id: 7, name: "Python" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* {categories.map((category) => (
          <Category key={category.id} title={category.name} />
        ))} */}
        <FlatList
          data={categories}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
            <Category_list
              category={item}
              onPress={() => props.navigation.navigate('Category_details' , {
                categoryName : item.name ,
                categoryId : item.id}) 
              }
            />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    padding: 16,
  },
});
