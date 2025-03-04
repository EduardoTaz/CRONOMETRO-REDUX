import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'; 
import store from './redux/store'; 
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';
import Home from './screens/Home';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Provider store={store}> 
      <NavigationContainer>
        <Stack.Navigator id={undefined} initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ScreenA" component={ScreenA} />
          <Stack.Screen name="ScreenB" component={ScreenB} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default AppNavigator;
