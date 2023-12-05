import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import uidata from '../constants/uidata';
import { COLORS } from '../constants/theme';

const ChoiceList = ({ setSelectedChoice, setSelectedSection }) => {
  const [selected, setSelected] = useState();
  const handlePress = (item) => {
    if (selected === item.value) {
      setSelected(null);
      setSelectedChoice(null);
      setSelectedChoice(null);
    } else setSelected(item.value);
    setSelectedChoice(item.value);
    setSelectedSection('restaurant');
  };

  return (
    <View>
      <Text
        style={{
          marginLeft: 16,
          marginVertical: 12,
          fontSize: 18,
          fontFamily: 'bold',
        }}
      >
        pick restaurants
      </Text>
      <FlatList
        data={uidata.choiceList}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        scrollEnabled
        style={{ marginTop: 5 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handlePress(item)}
            style={{
              backgroundColor:
                selected == item.value ? COLORS.secondary : COLORS.lightWhite,
              height: 40,
              borderRadius: 12,
              marginHorizontal: 8,
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                marginHorizontal: 10,
                fontFamily: 'regular',
                fontSize: 13,
                color:
                  item.value === selected ? COLORS.lightWhite : COLORS.gray,
              }}
            >
              {item.name}item
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ChoiceList;

const styles = StyleSheet.create({});
