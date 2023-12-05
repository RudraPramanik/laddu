import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native';
import uidata from '../../constants/uidata';
import StoreComponent from './StoreComponent';

const NearbyRestaurants = () => {
  return (
    <View
      style={{
        marginLeft: 12,
      }}
    >
      <FlatList
        data={uidata.restaurants}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled
        style={{ marginTop: 5, rowGap: 10 }}
        renderItem={({ item }) => (
          <StoreComponent onPress={() => {}} item={item} />
        )}
      />
    </View>
  );
};

export default NearbyRestaurants;

const styles = StyleSheet.create({});
