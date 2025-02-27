import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer
      children={
        <Stack.Navigator initialRouteName="ScreenA">
          <Stack.Screen
            name="ScreenA"
            component={ScreenA}
          />
          <Stack.Screen
            name="ScreenB"
            component={ScreenB}
          />
        </Stack.Navigator>
      }
    />
  );
};

export default AppNavigator;