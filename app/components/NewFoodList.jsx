import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import uidata from '../constants/uidata';
import FoodComponent from './FoodComponent';
import { useNavigation } from '@react-navigation/native';

const NewFoodList = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <FoodComponent
      item={item}
      onPress={() => navigation.navigate('food-nav', item)}
    />
  );
  return (
    <View style={styles.view}>
      <FlatList
        data={uidata.foods}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled
        style={{ marginTop: 5, rowGap: 10 }}
        renderItem={renderItem}
      />
    </View>
  );
};

export default NewFoodList;

const styles = StyleSheet.create({
  view: {
    marginLeft: 6,
    marginRight: 6,
  },
});
