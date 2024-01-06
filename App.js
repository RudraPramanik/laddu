import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import FoodNavigator from './app/navigation/FoodNavigator';
import * as SplashScreen from 'expo-splash-screen';
import * as Location from 'expo-location';
import BottomTab from './app/navigation/BottomTab';
import { UserLocationContext } from './app/context/UserLocationContext';
import { UserReversedGeoCode } from './app/context/UserReversedGeoCode';
import RestaurantPage from './app/navigation/RestaurantPage';
import Restaurant from './app/navigation/restaurant/Restaurant';

const Stack = createNativeStackNavigator();
export default function App() {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [error, setErrorMsg] = useState(null);

  const defaultAddresss = {
    city: 'Shanghai',
    country: 'China',
    district: 'Pudong',
    isoCountryCode: 'CN',
    name: '33 East Nanjing Rd',
    postalCode: '94108',
    region: 'SH',
    street: 'Stockton St',
    streetNumber: '1',
    subregion: 'San Francisco County',
    timezone: 'America/Los_Angeles',
  };
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/Poppins-Regular.ttf'),
    light: require('./assets/fonts/Poppins-Light.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    extrabold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
    semibold: require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    (async () => {
      setAddress(defaultAddresss);
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location denied');
      }
      let location = (await Location) / Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  if (!fontsLoaded) {
    // Return a loading indicator or splash screen while fonts are loading or app is initializing
    return;
  }

  console.log(location, 'location');

  return (
    <UserLocationContext.Provider value={{ location, setLocation }}>
      <UserReversedGeoCode.Provider value={{ address, setAddress }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="bottom-navigation"
              component={BottomTab}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="food-nav"
              component={FoodNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="rastaurant-page"
              component={RestaurantPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="rastaurant"
              component={Restaurant}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </UserReversedGeoCode.Provider>
    </UserLocationContext.Provider>
  );
}
