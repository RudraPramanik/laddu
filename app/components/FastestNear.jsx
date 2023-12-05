import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import uidata from '../constants/uidata';
import FoodComponent from './FoodComponent';

const FastestNear = () => {
  const renderItem = ({ item }) => (
    <View>
      <FoodComponent item={item} onPress={() => {}} />
    </View>
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

export default FastestNear;

const styles = StyleSheet.create({
  view: {
    marginLeft: 6,
    marginRight: 6,
  },
});
