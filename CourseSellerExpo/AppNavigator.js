import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Category from "./Screen/Category";
import Category_details from "./Screen/Category_details";

import Cart from "./Screen/Cart";
import Settings from "./Screen/Settings";
import Order from "./Screen/Order";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

// how to use the Stack Navigator and the Tab Navigator together

function Home () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Category_details" component={Category_details} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Order" component={Order} />
    </Tab.Navigator>
  );
}
