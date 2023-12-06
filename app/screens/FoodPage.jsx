import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { CartCountContext } from '../context/CartCountContext';
import { COLORS, SIZES } from '../constants/theme';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const FoodPage = ({ route, navigation }) => {
  const item = route.params.item;
  const [isChecked, setIsChecked] = useState(false);
  const [additives, setAdditives] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [restaurant, setRastaurant] = useState(1);
  const [preference, setPreference] = useState('');
  // const { cartCount, setCartCount } = useContext(CartCountContext);
  console.log(item);
  return (
    <View style={{ backgroundColor: COLORS.lightWhite, height: SIZES.height }}>
      <View>
        <Image
          source={{ uri: item.imageUrl[0] }}
          style={{
            width: SIZES.width,
            height: SIZES.height / 4,
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
          }}
        />
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
        <TouchableOpacity
          style={{ position: 'absolute', bottom: 30, right: 3 }}
          onPress={() => {}}
        >
          <View style={styles.restBtn}>
            <Text
              style={{
                color: COLORS.secondary1,
                fontFamily: 'medium',
                fontWeight: '900',
              }}
            >
              Open the store
            </Text>
          </View>
        </TouchableOpacity>
        <Text>FoodPage</Text>
      </View>
    </View>
  );
};

export default FoodPage;

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
  restBtn: {
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
  },
});
