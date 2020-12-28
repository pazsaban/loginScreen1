import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login1 from '../screens/Login1';
import {Header} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator initialRouteName={'login'}>
      <Stack.Screen name="login" component={Login1} />
    </Stack.Navigator>
  );
}
