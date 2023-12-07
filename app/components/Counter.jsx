import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';

const Counter = ({ count, setCount }) => {
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
      <Text style={{ marginRight: 8 }}>Counter</Text>
      <AntDesign
        name="minuscircleo"
        size={26}
        onPress={decrement}
        color={COLORS.primary}
      />
      <Text
        style={{
          marginHorizontal: 4,
          fontFamily: 'regular',
          fontSize: 18,
          marginTop: 1,
        }}
      >
        {count}
      </Text>
      <AntDesign
        name="pluscircleo"
        size={26}
        onPress={increment}
        color={COLORS.primary}
      />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
