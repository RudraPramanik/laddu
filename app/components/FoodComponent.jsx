import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import React from 'react';
import NetworkImage from './NetworkImage';

const FoodComponent = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <NetworkImage
        source={item.imageUrl[0]}
        width={SIZES.width - 60}
        height={SIZES.height / 5.8}
        radius={16}
        mode={'cover'}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.small}>{item.time}-delivery time</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoodComponent;

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 15,
    backgroundColor: COLORS.lightWhite,
    padding: 8,
    borderRadius: 16,
  },
  text: {
    fontSize: 14,
    fontFamily: 'regular',
    color: COLORS.gray,
  },
  small: { fontSize: 12, fontFamily: 'regular', color: COLORS.gray },
});
