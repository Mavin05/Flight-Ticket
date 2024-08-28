import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './../screens/Auth/LoginScreen'
import NewPassword from '../screens/Auth/NewPassword';
import HomeScreen from '../screens/Auth/HomeScreen';
import LocationSelection from '../screens/Auth/LocationSelection';
import FlightAvailability from '../screens/Auth/FlightAvailability';
import SuggestionScreen from '../screens/Auth/SuggestionScreen';
import UpcomingTripScreen from '../screens/Auth/UpcomingTripScreen';
import Seatselection from '../screens/Auth/Seatselection';
import DownloadPage from '../screens/Auth/DownloadPage';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator  screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="newpassword" component={NewPassword} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="locationselection" component={LocationSelection} />
        <Stack.Screen name="flightavailablity" component={FlightAvailability} />
        <Stack.Screen name="suggestion" component={SuggestionScreen} />
        <Stack.Screen name="upcoming" component={UpcomingTripScreen} />
        <Stack.Screen name="seatselection" component={Seatselection} />
        <Stack.Screen name="downloadpage" component={DownloadPage} />
      </Stack.Navigator>
  );
}

export default MyStack