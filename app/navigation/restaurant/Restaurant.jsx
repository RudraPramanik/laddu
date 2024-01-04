import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import RestaurantPage from '../RestaurantPage';
import NetworkImage from '../../components/NetworkImage';
import { SIZES, COLORS } from '../../constants/theme';
import { useRoute } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { RatingInput } from 'react-native-stock-star-rating';

import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from '@expo/vector-icons';

const Restaurant = ({ navigation }) => {
  const route = useRoute();
  const item = route.params;
  console.log(item);

  return (
    <View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <Text>
            <Ionicons
              name="chevron-back-circle"
              size={30}
              color={COLORS.primary}
            />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.shareBtn}>
          <Text>
            <MaterialCommunityIcons
              name="share-circle"
              size={30}
              color={COLORS.primary}
            />
          </Text>
        </TouchableOpacity>
        <NetworkImage
          source={item.imageUrl}
          width={SIZES.width}
          height={SIZES.height / 3.4}
          radius={15}
          // mode={'cover'}
        />
        <View style={styles.rating}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 12,
            }}
          >
            <RatingInput
              rating={Number(item.rating)}
              size={20}
              color={COLORS.lightWhite}
            />
            <TouchableOpacity style={styles.ratingBtn}>
              <Text style={styles.title2}>Rate this store</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* <NetworkImage
        data={item.imageUrl}
        height={SIZES.height / 3}
        width={SIZES.width}
        mode={'cover'}
      /> */}

      <View style={{ marginTop: 8, marginHorizontal: 8, marginBottom: 10 }}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={{ height: 400 }}>
        <RestaurantPage />
      </View>
    </View>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  backBtn: {
    marginLeft: 12,
    alignItems: 'center',
    zIndex: 999,
    position: 'absolute',
    top: SIZES.xxLarge + 3,
  },
  shareBtn: {
    marginRight: 12,
    alignItems: 'center',
    zIndex: 999,
    right: 0,
    position: 'absolute',
    top: SIZES.xxLarge,
  },
  title: {
    fontSize: 22,
    fontFamily: 'medium',
    color: COLORS.black,
  },
  title2: {
    fontSize: 16,
    fontFamily: 'medium',
    color: COLORS.lightWhite,
  },
  rating: {
    height: 50,
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    backgroundColor: '#00fff53c',
    zIndex: 999,
    bottom: 0,
    borderRadius: 18,
  },
  ratingBtn: {
    borderColor: COLORS.lightWhite,
    borderWidth: 1,
    borderRadius: 12,
    padding: 6,
  },
});
