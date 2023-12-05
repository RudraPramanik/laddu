import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FoodPage = ({ route, navigation }) => {
  const item = route.params.item;
  console.log(item);
  return (
    <View>
      <Text>FoodPage</Text>
    </View>
  );
};

export default FoodPage;

const styles = StyleSheet.create({});
