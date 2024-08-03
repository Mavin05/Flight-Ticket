import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './../screens/Auth/LoginScreen'
import NewPassword from '../screens/Auth/NewPassword';
import HomeScreen from '../screens/Auth/HomeScreen';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator  screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="newpassword" component={NewPassword} />
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
  );
}

export default MyStack