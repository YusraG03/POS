import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import OpenRegisterScreen from './screens/OpenRegisterScreen';
import StartSaleScreen from './screens/StartSaleScreen'; // 🆕 ADD THIS

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="OpenRegister" component={OpenRegisterScreen} />
        <Stack.Screen name="StartSale" component={StartSaleScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
