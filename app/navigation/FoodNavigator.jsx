import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FoodPage from '../screens/FoodPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoute } from '@react-navigation/native';
import { ScreenStack } from 'react-native-screens';
// import OrderPage form '../screens/OrderPage'

const Stack = createNativeStackNavigator();

const FoodNavigator = () => {
  const route = useRoute();
  const item = route.params;

  return (
    <Stack.Navigator initialRouteName="food-page">
      <Stack.Screen
        name=" food-page"
        component={FoodPage}
        options={{ headerShown: false }}
        initialParams={{ item: item }}
      />
      {/* // <Stack.Screen
      //   name=" order page"
      //   component={OrderPage}
      //   options={{ headerShown: false, presentation: 'modal' }}
      //   initialParams={{ item: item }} 
      // /> */}
    </Stack.Navigator>
  );
};

export default FoodNavigator;

const styles = StyleSheet.create({});
