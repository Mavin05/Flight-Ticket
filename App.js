import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Auth from './src/router/stacknavigation'

export default function App () {
  return (
    <NavigationContainer>
      <Auth/>
    </NavigationContainer>
  );
}