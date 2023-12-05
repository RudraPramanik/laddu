import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import AssetImage from './AssetImage';
import { COLORS, SIZES } from '../constants/theme';

const HomeHeader = () => {
  //userReverseGeocode have to implement inside useContext() 47m
  //   const [address, setAddress] = useContext();
  // 57 m, time function remaining

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={styles.outerStyle}>
        <AssetImage
          data={require('../../assets/images/profile.jpg')}
          width={55}
          height={55}
          mode={'cover'}
          radius={99}
        />
        <View style={styles.headerStyle}>
          <Text style={styles.heading}>delivering to</Text>
          <Text style={styles.location}>shangai</Text>
          {/* <Text>{`${address.name} ${address.city}`}</Text> */}
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  outerStyle: {
    marginBottom: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  headerStyle: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  heading: {
    fontFamily: 'medium',
    fontSize: SIZES.medium,
    color: COLORS.secondary,
  },
  location: {
    fontFamily: 'regular',
    fontSize: SIZES.small + 2,
    color: COLORS.gray,
  },
});
