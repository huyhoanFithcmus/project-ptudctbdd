import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Category from "./Screen/Category";
import Category_details from "./Screen/Category_details";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Category">
      <Stack.Screen name="Home" component={Category} />
      <Stack.Screen name="Category_details" component={Category_details} />
    </Stack.Navigator>
  );
}
