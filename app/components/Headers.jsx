import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';

const Headers = ({ heading, onPress }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 6,
        justifyContent: 'space-between',
        marginRight: 16,
      }}
    >
      <Text style={styles.text}>{heading}</Text>
      <Pressable onPress={onPress}>
        <Ionicons name="grid" size={20} color={COLORS.secondary} />
      </Pressable>
    </View>
  );
};

export default Headers;

const styles = StyleSheet.create({
  text: { marginLeft: 16, fontSize: 18, fontFamily: 'bold' },
});
