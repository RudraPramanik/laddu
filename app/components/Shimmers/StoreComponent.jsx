import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../constants/theme';
import NetworkImage from '../NetworkImage';
import { RatingInput } from 'react-native-stock-star-rating';

const StoreComponent = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <NetworkImage
        source={item.imageUrl}
        width={SIZES.width - 80}
        height={SIZES.height / 5.8}
        radius={16}
        mode={'cover'}
      />
      <Text style={styles.text}>{item.title}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text style={styles.small}>Delivery undar</Text>
        <Text style={styles.small}>{item.ratingCount}+ ratings </Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <RatingInput
          rating={item.rating}
          size={14}
          maxStars={5}
          setRating={item.rating}
          bordered={false}
          color={COLORS.primary}
        />
      </View>
    </TouchableOpacity>
  );
};

export default StoreComponent;

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
