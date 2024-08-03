import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './../screens/Auth/LoginScreen'
import Splash from '../screens/Auth/Splash';
import NewPassword from '../screens/Auth/NewPassword';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator  screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="newpassword" component={NewPassword} />
        <Stack.Screen name="splash" component={Splash} />
      </Stack.Navigator>
  );
}

export default MyStack