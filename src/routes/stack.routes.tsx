import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Confirmation, PlantSelect, UserIdentification, Welcome } from '../scenes';

const Stack = createNativeStackNavigator();

export const AppRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="UserIdentification" component={UserIdentification} />
    <Stack.Screen name="Confirmation" component={Confirmation} />
    <Stack.Screen name="PlantSelect" component={PlantSelect} />
  </Stack.Navigator>
);
