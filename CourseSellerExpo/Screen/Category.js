import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

import Category_list from '../../CourseSellerExpo/components/Category_list';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import "../../CourseSellerExpo/mock-db/db.json"


// navigate the category to the category details
export default function Category(props) {
  
  // get data from the server
  // const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3001/category')
  //     .then((response) => {
  //       setCategories(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("lỗi ",error);
  //     });
  // }, []);

  const categories = [ 
    { id: 1, name: 'Scratch'},
    { id: 2, name: 'Spike Prime' },
    { id: 3, name: 'Mindstorms' },
    { id: 4, name: 'Wedo' },
    { id: 5, name: 'Arduino' },
    { id: 6, name: 'Python' }
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* {categories.map((category) => (
          <Category key={category.id} title={category.name} />
        ))} */}
        <FlatList
          data={categories}
          // numColumns={1}
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
          keyExtractor={(item) => '${item.id}'}
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
