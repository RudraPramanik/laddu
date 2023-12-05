import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import uidata from '../constants/uidata';
import CategoryItem from './CategoryItem';

const CategoryList = ({
  setSelectedCategory,
  setSelectedSection,
  setSelectedValue,
}) => {
  const [selected, setSelected] = useState(null);
  const categories = [1, 2, 3, 4, 5];

  const handleSelectedCategory = (item) => {
    if (selected == item.value) {
      setSelectedCategory(null);
      setSelected(null);
      setSelectedSection(null);
      setSelectedValue(null);
    } else {
      setSelectedCategory(item._id);
      setSelected(item.value);
      setSelectedSection('category');
      setSelectedValue(item.title);
    }
  };

  return (
    <View>
      <FlatList
        data={uidata.categories}
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{ marginTop: 5 }}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectedCategory(item)}>
            <Text>
              <CategoryItem selected={selected} category={item} />{' '}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({});
