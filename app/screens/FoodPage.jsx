import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { CartCountContext } from '../context/CartCountContext';
import { COLORS, SIZES } from '../constants/theme';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Counter from '../components/Counter';

const FoodPage = ({ route, navigation }) => {
  const item = route.params.item;
  const [isChecked, setIsChecked] = useState(false);
  const [additives, setAdditives] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [restaurant, setRastaurant] = useState(1);
  const [preference, setPreference] = useState('');
  const [count, setCount] = useState(1);
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
      </View>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={[styles.title, { color: COLORS.primary }]}>
            ${(item.price + totalPrice) * count}
          </Text>
        </View>
        <Text style={styles.small}>{item.description}</Text>
        <FlatList
          data={item.foodTags}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          style={{ marginTop: 5 }}
          horizontal
          scrollEnabled
          renderItem={({ item }) => (
            <View
              style={{
                right: 10,
                marginHorizontal: 10,
                backgroundColor: COLORS.primary,
                borderRadius: 8,
                borderWidth: 2,
                borderColor: COLORS.gray,
              }}
            >
              <Text style={{ padding: 6, color: COLORS.lightWhite }}>
                {item}
              </Text>
            </View>
          )}
        />
        <Text style={[styles.title, { marginBottom: 10, marginTop: 20 }]}>
          Additives & Toppings
        </Text>
        <FlatList
          data={item.additives}
          showsVarticleScrollIndicator={false}
          keyExtractor={(item) => item.id}
          style={{ marginTop: 5 }}
          scrollEnabled
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,

                // right: 10,
                // marginHorizontal: 10,
                // backgroundColor: COLORS.primary,
                // borderRadius: 8,
                // borderWidth: 2,
                // borderColor: COLORS.gray,
              }}
            >
              <BouncyCheckbox
                size={20}
                unfillColor="#ffffff"
                fillColor={COLORS.primary}
                innerIconStyle={{ borderWidth: 1 }}
                textStyle={styles.small}
                text={item.title}
              />
              <Text style={{ padding: 6, color: COLORS.primary }}>
                ${item.price}
              </Text>
            </View>
          )}
        />
        <Text style={[styles.title, { marginBottom: 10, marginTop: 20 }]}>
          Preferences
        </Text>
        <View style={styles.input}>
          <TextInput
            placeholder="Add specific instructions"
            value={preference}
            onChangeText={(value) => setPreference(value)}
            autoCapitalize={'none'}
            autoCorrect={false}
            style={{ flex: 1 }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}
        >
          <Text style={[styles.title, { marginBottom: 10 }]}>Quantity</Text>
          <Counter count={count} setCount={setCount} />
        </View>
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
  container: {
    marginHorizontal: 12,
    marginTop: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: 'medium',
    color: COLORS.black,
  },
  small: {
    fontSize: 13,
    fontFamily: 'medium',
    color: COLORS.gray,
    textAlign: 'justify',
  },
  input: {
    borderColor: COLORS.primary,
    borderWidth: 1,
    backgroundColor: COLORS.offwhite,
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
